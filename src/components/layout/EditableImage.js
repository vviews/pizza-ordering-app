import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";



export default function EditableImage({image64, setImage64}) {
    console.log(image64)
    const [display, setDisplay] = useState()
    const [image, setImage] = useState()

    // useEffect(() => {
    //     if(image){
    //         setDisplay(URL.createObjectURL(image))
    //     }
    // },[image])

    function convertToBase64(file){
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
          resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
          reject(error)
        }
      })
    }

  async function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      // setImage(files[0])
      const base64 = await convertToBase64(files[0])
      setImage64(base64)
    }
  }

  return (
    <>
      {image64 && (
        <Image className="rounded-lg w-full h-full mb-1" src={image64} width={250} height={250} alt={'avatar'} />
      )}
      {!image64 && (
        <div className="text-center bg-gray-200 p-4 text-gray-500 rounded-lg mb-1">
          No image
        </div>
      )}
      <label>
        <input type="file" className="hidden" onChange={handleFileChange} />
        <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">Change image</span>
      </label>
    </>
  );
}