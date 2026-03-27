"use client";
import CardComponent from '@/components/CardComponent';
import { useEffect, useState } from 'react';


export default function page() {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch("https://homework-api.noevchanmakara.site/api/v1/products")
        .then((res)=> res.json()
        .then((products)=>{
            setProducts(products);
        })
    )
    })
  return (
    <div className='grid grid-cols-4 gap-5'>
        {products?.payload?.map((products)=> (
            <CardComponent key={products.productId} products = {products}/>
        ))}
        
    </div>
  )
}