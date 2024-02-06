import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../AppContext";

export default function MenuItem (menuItem) {
    const {myFile, name, description, basePrice, sizes, extraIngredientPrices} = menuItem
    // const {addToCart} = useContext(CartContext)

    console.log(menuItem)

    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/50 transition-all">
            <div className="text-center">
                <img src={myFile} className="max-h-24 w-auto block mx-auto" alt="pizza"/>
            </div>
            <h4 className="font-semibold text-xl my-3">{name}</h4>
            <p className="text-gray-500 text-sm line-clamp-3">
            {description}
            </p>
            <button 
            onClick={() => addToCart(menuItem)}
            className="mt-4 bg-primary text-white rounded-full px-8 py-2"
            > 
            Add to cart ฿{basePrice}
            </button>
        </div>
    )
}