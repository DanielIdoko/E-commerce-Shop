import React, { useEffect, useState } from "react";
import { href, Link, useLocation, useParams } from "react-router-dom";
import { store, dealProducts } from "../data/products";
import { FiArrowLeft } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

const ProductDetail = () => {
  const [expandProductTitle, setExpandProductTitle] = useState(false);
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
    <div className="mt-20 w-full h-full md:p-10 bg-white">
      {/* BreadCrumbs */}
      <span className="px-6 py-6 md:px-2 flex items-center justify-start gap-3">
        <Link to="/" className="breadcrumb-text text-gray-600">
          Home {" / "}
        </Link>{" "}
        <Link to="/products" className="breadcrumb-text text-gray-600">
          products {" / "}
        </Link>
        <Link to={`/products/${asin}`} className="breadcrumb-text">
          {product.product_title?.slice(0, 25) + "..." ||
            product.deal_title.slice(0, 10) + "..."}
        </Link>
      </span>
      <Link to={`/`} className="mx-5 action-btn">
        <FiArrowLeft /> Back to store
      </Link>
      {/* Breadcrumbs ends */}

      {/* Product Description main data */}
      <div className="w-full h-full p-3 flex flex-col md:flex-row justify-start gap-3 mt-10">
        <div className="md:w-[50%] h-full overflow-hidden relative flex items-center justify-center">
          <img
            className="h-[420px] cursor-pointer object-cover"
            src={product.deal_photo || product.product_photo}
            alt={product.product_title || product.deal_title}
          />
          <span className="absolute top-10 right-10 text-x-small-size text-accent w-13 bg-primary-lighter p-1 rounded-md">
            {product.deal_badge}
          </span>
        </div>

        {/* Text section for product details */}
        <div className="md:w-[50%] h-full p-2 md:p-5">
          <h5 className="text-small-size md:text-x-medium-size py-2 text-accent font-f-family-1">
            {expandProductTitle
              ? product.product_title || product.deal_title
              : product.product_title?.slice(0, 90) ||
                product.deal_title?.slice(0, 30)}

            {/* Dear dev, this is the explanation of this code below:
              if the product_title or deal_title of the product state exists and their length is greater than or equal to 90, we would show the span to "see more" or "less" otherwise show nothing */}
            {product.product_title?.length >= 90 ||
              (product.deal_title?.length >= 90 ? (
                <span
                  onClick={() => setExpandProductTitle(!expandProductTitle)}
                  className="text-gray-500  text-small-size font-normal cursor-pointer hover:underline"
                >
                  {expandProductTitle ? " ...see less" : " ...see more"}
                </span>
              ) : (
                ""
              ))}
          </h5>
          <span className="bg-gray-100 px-3 py-1 text-x-small-size font-f-family-1 text-accent rounded-full">
            {product.product_category}
          </span>

          {/* price here */}
          <p className="text-medium-size md:text-large-size font-f-family-1 text-accent py-3">
            {product.product_price || "$" + product.deal_price.amount}
          </p>

          {/* Rating here */}
          {!product.deal_title && (
            <span className="w-full h-fit flex items-center justify-start gap-1 py-3">
              <AiFillStar className="text-yellow-500" />
              <p className="text-small-size font-f-family-1">
                {" "}
                {product.product_star_rating} ({product.product_num_ratings}{" "}
                ratings)
              </p>
            </span>
          )}

          <div className="w-full h-fit px-1 flex flex-col md:flex-row items-center gap-2">
            <button className="add-to-cart-btn-2">Add to Cart</button>
            <button className="buy-now-btn">Buy Now</button>
            {/* {product.deal_url && (
              <Link to={product.deal_url} target="_blank">
                View deal on Amazon
              </Link>
            )} */}
          </div>
        </div>
      </div>

      {/* Similar products */}

      {/* Similar products ends*/}
    </div>
  );
};

export default ProductDetail;
