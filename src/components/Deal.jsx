import React from "react";
import { Link } from "react-router-dom";

const Deal = ({ deal }) => {
  return (
    <Link
      to={`/products/${deal.deal_asin}`}
      state={{ deal }}
      className="w-40 h-88 md:w-55 lg:w-90 rounded-md p-1.5 relative cursor-pointer transition duration-200 ease-in"
    >
      <img
        src={deal.deal_photo}
        alt={deal.deal_title}
        className="w-full h-42 pb-1 object-contain"
      />
      <span className="text-x-small-size text-accent w-13 bg-primary-lighter p-1 rounded-md absolute top-3 left-1">
        {deal.deal_badge ? deal.deal_badge : "10% off"}
      </span>
      {/* Text container */}
      <div className="w-full h-fit pt-2">
        <h3 className="text-medium-size text-accent font-f-family-2 font-bold">
          {deal.deal_title.length > 15
            ? deal.deal_title.slice(0, 12) + "..."
            : deal.deal_title}
        </h3>
        <p className="text-small-size text-gray-500">
          {deal.deal_price.amount + deal.deal_price.currency}
        </p>
        <span className="text-x-small-size text-green-600 ">
          {deal.deal_state ? deal.deal_state : "OUT OF STOCK"}
        </span>
      </div>
      <button className="mt-1 add-to-cart-btn">Add to Cart</button>
    </Link>
  );
};

export default Deal;
