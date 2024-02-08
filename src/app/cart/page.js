'use client';
import {CartContext, cartProductPrice} from "@/components/AppContext";
import Trash from "@/components/icons/Trash";
import AddressInputs from "@/components/layout/AddressInputs";
import SectionHeaders from "@/components/layout/SectionHeaders";
import CartProduct from "@/components/menu/CartProduct";
import {useProfile} from "@/components/UseProfile";
import Image from "next/image";
import {useContext, useEffect, useState} from "react";
import toast from "react-hot-toast";
import {redirect, useRouter} from "next/navigation";
import { useSession } from "next-auth/react"

export default function CartPage() {
  const session = useSession()
  const {status} = session;
  const {cartProducts,removeCartProduct, clearCart} = useContext(CartContext);
  const [address, setAddress] = useState({});
  const [cartProductInfo, setCartProductInfo] = useState([]);
  const {data:profileData} = useProfile();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.href.includes('canceled=1')) {
        toast.error('Payment failed 😔');
      }
    }
  }, []);

  useEffect(() => {
    const filterIds = cartProducts && cartProducts.map(item => item._id);

    fetch('/api/menu-items')
    .then(res => {
      return res.json()
    })
    .then(items => {
        const filteredData = items.filter((item) => filterIds.includes(item._id))
        let data = []

        for (const item of items){
            if (filterIds.includes(item._id)){
                data.push({
                    ...item,
                    size: cartProducts[filterIds.indexOf(item._id)].size,
                    extras: cartProducts[filterIds.indexOf(item._id)].extras,
                })
            }
        }
        
        if(data?.length > 0){
            setCartProductInfo(data)
        }
    });
  }, [cartProducts]);


  useEffect(() => {
    if (profileData?.city) {
      const {phone, streetAddress, city, postalCode, country} = profileData;
      const addressFromProfile = {
        phone,
        streetAddress,
        city,
        postalCode,
        country
      };
      setAddress(addressFromProfile);
    }
  }, [profileData]);

  let subtotal = 0;
  for (const p of cartProductInfo) {
    subtotal += cartProductPrice(p);
  }
  function handleAddressChange(propName, value) {
    setAddress(prevAddress => ({...prevAddress, [propName]:value}));
  }
  
  async function proceedToCheckout(ev) {
    ev.preventDefault();
    if (status === 'unauthenticated'){
      return router.push('/login')
    }
    // address and shopping cart products
    fetch('api/checkout',{
      method: 'POST',
      body: JSON.stringify({
        ...address,
        cartProducts: cartProductInfo.map((item) => ({
          _id: item._id,
          myFile: item.myFile, 
          name: item.name,
          extras: item.extras,
          basePrice: item.basePrice,
          size: item.size,
        }))
      }),
    })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      router.push(`/orders/${data._id}`);
      clearCart();
    })

  }

  if (cartProducts?.length === 0) {
    return (
      <section className="mt-8 text-center">
        <SectionHeaders mainHeader="Cart" />
        <p className="mt-4">Your shopping cart is empty 😔</p>
      </section>
    );
  }

  return (
    <section className="mt-8">
      <div className="text-center">
        <SectionHeaders mainHeader="Cart" />
      </div>
      <div className="mt-8 grid gap-8 grid-cols-2">
        <div>
          {cartProducts?.length === 0 && (
            <div>No products in your shopping cart</div>
          )}
          {cartProducts?.length > 0 && cartProductInfo.map((product, index) => (
            <CartProduct
              key={index}
              index={index}
              product={product}
              onRemove={removeCartProduct}
            />
          ))}
          <div className="py-2 pr-16 flex justify-end items-center">
            <div className="text-gray-500">
              Subtotal:<br />
              Delivery:<br />
              Total:
            </div>
            <div className="font-semibold pl-2 text-right">
              ฿{subtotal}<br />
              ฿50<br />
              ฿{subtotal + 50}
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2>Checkout</h2>
          <form onSubmit={proceedToCheckout}>
            <AddressInputs
              addressProps={address}
              setAddressProp={handleAddressChange}
            />
            <button type="submit">Order ${subtotal+50}</button>
          </form>
        </div>
      </div>
    </section>
  );
}