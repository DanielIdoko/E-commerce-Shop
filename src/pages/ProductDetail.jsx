import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { store, dealProducts } from "../data/products";
import { FiArrowLeft } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

const ProductDetail = () => {
  // get the location and state for the product data
  const { asin } = useParams();
  const location = useLocation();

  // Find the product state and assign to product variable
  const product =
    location.state?.product ||
    store.find((item) => item.product_asin === asin) ||
    dealProducts.find((item) => item.deal_asin === asin);

  if (!product) {
    return <p>Sorry, that product was not Found</p>;
  }

  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <div className="mt-20 w-full h-full md:p-10 bg-amber-200">
      {/* Product Description data */}
      <div>
        <img
          src={product.deal_photo || product.product_photo}
          alt={product.product_title || product.deal_title}
        />
      </div>
      {/* Text section for product details */}
      <div>
        <h5>{product.product_title || product.deal_title}</h5>
        <span>{product.product_category}</span>
        <span>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          {product.product_star_rating} ({product.product_num_ratings} ratings)
        </span>
        
        <p>{product.product_price}</p>

        <div>
          <button>Add to Cart</button>
          <button>Buy Now</button>
          {product.deal_url && (
            <Link to={product.deal_url} target="_blank">
              View deal on Amazon
            </Link>
          )}
        </div>
      </div>
      <Link to="/">
        <FiArrowLeft /> Back to Homepage
      </Link>
    </div>
  );
};

export default ProductDetail;
