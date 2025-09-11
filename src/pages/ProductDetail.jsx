import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { store, dealProducts } from "../data/products";
import { FiArrowLeft } from "react-icons/fi";

const ProductDetail = () => {
  // get the location and state for the product data
  const { asin } = useParams();
  const location = useLocation();

  const product =
    location.state?.product ||
    store.find((item) => item.product_asin === asin) ||
    dealProducts.find((item) => item.deal_asin === asin);

  if (!product) {
    return <p>Product not Found</p>;
  }

  useEffect(() => console.log(product), [product]);

  return (
    <div className="mt-20 w-full h-full md:p-10 bg-amber-200">
      <p>{product.deal_title}</p>
      <Link to="/">
        <FiArrowLeft /> Back to Homepage
      </Link>
    </div>
  );
};

export default ProductDetail;
