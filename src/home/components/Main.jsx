import React, { useContext, useEffect, useState } from "react";
import CartWIcon from "../../assets/Cart_white.svg";
import axios from "axios";
import Context from "../../contexts/ContextWrapper";
import { useNavigate } from "react-router-dom";

function Main({ products }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [gross, setGross] = useState(1);

  const navigate = useNavigate();

  const { selectedCategory, selectedCurrency } = useContext(Context);

  useEffect(() => {
    const categories = ["Cars", "Clothing", "Tech"];
    setFilteredProducts(
      products.filter(
        (product) => product.category === categories[selectedCategory]
      )
    );
  }, [selectedCategory, products]);

  useEffect(() => {
    selectedCurrency === "$" ? setGross(1) : setGross(1.7);
  }, [selectedCurrency]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => product.category === "Cars")
    );
  }, []);

  return (
    <div className="px-[25px] sm:px-0">
      <div>
        <h1 className="text-4xl lg:text-5xl font-light mt-[80px] mb-[40px]">
          Category name
        </h1>
      </div>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[100px]">
        {filteredProducts?.length > 0 &&
          filteredProducts.map((product) => (
            <div
              onClick={() => {
                navigate(`/product/${product.id}`);
              }}
              className="flex w-full transition-shadow ease-in-out max-w-[385px] group hover:shadow-2xl hover:shadow-slate-900 flex-col p-[16px]"
              key={product.id}
            >
              <div className="w-full relative max-w-[356px] h-[340px]">
                <img
                  className="object-cover w-full max-w-[356px] h-[340px]"
                  src={product.gallery[0]}
                  alt={product.description}
                />
                <button className="hidden group-hover:flex justify-center items-center border border-[#5ECE7B] bg-[#5ECE7B] rounded-full w-[50px] h-[50px] absolute right-5 -bottom-[25px]">
                  <img
                    className="w-[24px] h-[24px]"
                    src={CartWIcon}
                    alt="cart_white"
                  />
                </button>
              </div>
              <p className="font-light mt-[24px]">
                {product.brand} {product.title}
              </p>
              <p className="flex gap-1 font-semibold">
                <span>{selectedCurrency === "$" ? "$" : "₼"}</span>
                {(product.price * gross).toFixed(2)}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Main;
