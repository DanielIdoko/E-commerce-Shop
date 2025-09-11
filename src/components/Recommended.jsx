import React from "react";
import { dealProducts } from "../data/products";
import Deal from "./Deal";

const Recommended = () => {
  return (
    <>
      <p className="heading">Recommended</p>
      <ul className="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dealProducts.slice(0, 4).map((product) => (
          <Deal deal={product} />
        ))}
      </ul>
    </>
  );
};

export default Recommended;
