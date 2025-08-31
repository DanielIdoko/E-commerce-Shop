import React, { useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import {store}  from '../data/products';



const ProductDetail = () => {
  const { asin } = useParams();
  const location = useLocation();


  const product = location.state?.product || store.find(item => item.product_asin === asin)

  if(!product){
    return <p>Product not Found</p>
  }

  // code to make page scroll to start

  return (
    <div className='mt-20 w-full h-full md:p-10 bg-amber-200'>
      <p>{product.product_title}</p>
      <Link to="/">Back to Homepage</Link>    
    </div>
  )
}

export default ProductDetail
