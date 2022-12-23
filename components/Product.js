import React from "react";
import Link from 'next/link';
import {urlFor} from '../Lib/client';
import { useEffect } from "react";
const Product = ({product : {image , name , slug , price}})=>{
  
    useEffect(() => {
     
      }, [slug]);
      if (!slug) return null;
    
    return(
        <div>
            <Link href={`/product/${slug.current}`}>
              <div className="product-card">
                    <img src={urlFor(image && image[0])}  width= "250px" hieght="250px" className="product-image" alt="product"/>
                    <p className="product-name">{name} </p>
                    <p className="product-price"> Rs.{price} </p>
                </div>
            </Link>
        </div>
    )
}
export default Product