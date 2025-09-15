import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

const CustomButton = ({ onClick }) => {
  return (
    <button className="add-to-cart-btn mt-2 mx-1" onClick={onClick}>
      <AiOutlineShopping />
      <p>Add item to Cart</p>
    </button>
  );
};

export default CustomButton;
