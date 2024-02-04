import React from "react";
import Nav from "../common/Nav";
import ProductView from "./components/ProductView";

function Product() {
  return (
    <div className="lg:px-[117px]">
      <Nav />
      <ProductView />
    </div>
  );
}

export default Product;
