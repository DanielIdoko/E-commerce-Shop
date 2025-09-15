import React, { lazy } from "react";
import { dealProducts } from "../data/products";
const Deal = lazy(() => import("./Deal"));

const Recommended = () => {
  return (
    <div className="w-full h-full md:px-1 overflow-auto">
      <p className="heading">Recommended</p>
      <ul className="w-full h-full grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center">
        {dealProducts.slice(0, 4).map((product) => (
          <Deal deal={product} key={product.deal_title}/>
        ))}
      </ul>
    </div>
  );
};

export default Recommended;
