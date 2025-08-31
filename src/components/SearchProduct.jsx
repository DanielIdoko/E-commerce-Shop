import React from "react";
import { Link } from 'react-router-dom'
const SearchProduct = ({ item }) => {
  return (
    <li
      className="w-40 h-88 md:w-55 lg:w-80 rounded-md bg-none relative hover:shadow-sm hover:shadow-gray-300 transition duration-300 ease-in cursor-pointer"
      key={item.product_asin}
      >
      <Link to={`/products/${item.product_asin}`} state={{item}}>
        <img
          src={item.product_photo}
          alt={item.product_title + " image"}
          className="w-full h-42 pb-1 object-contain"
        />
        {/* Text container */}
        <div className="w-full h-fit pt-2 md:p-2 mt-4">
          <h3 className="text-small-size md:text-medium-size text-accent font-f-family-2 font-bold p-1">
            {item.product_title.length > 15
              ? item.product_title.slice(0, 15) + "..."
              : item.product_title.length}
          </h3>

          <div className="w-full h-fit p-1 flex items-center justify-start gap-2">
            <p className="text-small-size md:text-medium-size text-gray-800 flex-1">
              {item.product_price}
            </p>
            <span className="text-x-small-size md:text-medium-size text-yellow-500">
              {item.product_star_rating}
            </span>
            <span className="text-x-small-size md:text-medium-size text-yellow-700 ">
              ({item.product_num_ratings})
            </span>
          </div>
        </div>
        <button className="bg-primary text-accent flex items-center justify-center p-1 pl-2 pr-2 md:p-2 md:pl-3 md:pr-3 w-full lg:w-fit rounded-full mt-5 ml-2 md:ml-3 cursor-pointer transition duration-150 ease-in">
          Add to Cart
        </button>
      </Link>
    </li>
  );
};

export default SearchProduct;
