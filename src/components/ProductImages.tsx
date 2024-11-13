'use client'
import Image from "next/image";
import { useState } from "react";

const images = [
    {id:1 , url:"/puff1.jpg"},
    {id:2 , url:"/puff2.jpg"},
    {id:3 , url:"/puff3.jpg"},
    {id:4 , url:"/puff4.jpg"},
]


const ProductImages = ()=>{

    const [index,setIndex] = useState(0);

    return (<div>
        <div className="h-[500px] relative ">
            <Image src={images[index].url}  alt="" fill  className="object-contain rounded-md" sizes="50vw"/>
        </div>
        <div className="flex justify-between gap-4 mt-8 cursor-pointer" >
        {images.map((img,i)=>(
            <div key={img.id} className="w-1/4 h-32 relative gap-4 mt-8"><Image src={img.url} onClick={()=>setIndex(i)}
              alt="" fill  className="object-contain rounded-md" sizes="50vw"/></div>
        ))}
        </div>
    </div>)
}
export default ProductImages ; 