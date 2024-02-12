import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductView() {
  const [product, setProduct] = useState({});
  const [selectedImg, setSelectedImg] = useState(0);

  let { id } = useParams();

  const colorsHex = {
    natural: "#FF7F50",
    red: "#FF0000",
    green: "#00FF00",
    blue: "#187BCD",
    yellow: "#FFFF00",
    cyan: "#00FFFF",
    magenta: "#FF00FF",
    white: "#FFFFFF",
    black: "#000000",
    gray: "#808080",
    silver: "#C0C0C0",
    maroon: "#800000",
    olive: "#808000",
    navy: "#000080",
    purple: "#800080",
    teal: "#008080",
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`).then((res) => {
      setProduct(res.data.product);
      console.log(res.data.product);
    });
  }, []);

  return (
    <div className="flex flex-col justify-start gap-14 lg:flex-row mt-[80px]">
      <div className="flex lg:flex-col mx-14 lg:mx-0 order-2 lg:order-1 gap-[30px]">
        {product?.gallery?.length > 0 &&
          product.gallery.map((image, key) => {
            return (
              <div
                onClick={() => {
                  setSelectedImg(key);
                }}
                className={`${
                  selectedImg === key
                    ? "border border-green-300 shadow-xl shadow-green-600 "
                    : ""
                } w-[87px] h-[87px]`}
              >
                <img
                  className="object-cover w-full h-full"
                  src={`${image}`}
                  alt="hehe"
                />
              </div>
            );
          })}
      </div>
      <div className="flex justify-start px-4 order-1 lg:order-2 w-full max-w-[800px] h-[600px]">
        <img
          className="object-fill lg:object-cover w-full h-full"
          src={product?.gallery?.[selectedImg]}
          alt="hehe"
        />
      </div>
      <div className="flex flex-col mx-14 lg:mx-0 order-3">
        <h1 className="text-3xl font-semibold">{product.brand}</h1>
        <h2 className="text-3xl font-light">{product.title}</h2>
        {product?.size?.length > 0 && (
          <>
            <div className="mt-10">
              <p className="text-[18px] font-bold">SIZE:</p>
              <div className="flex gap-3">
                <div className="flex border-[1.9px] border-zinc-900 w-[63px] h-[45px] justify-center items-center">
                  <p>XS</p>
                </div>
                <div className="flex border-[1.9px] bg-zinc-900 border-zinc-900 w-[63px] h-[45px] justify-center items-center">
                  <p className="text-white">S</p>
                </div>
                <div className="flex border-[1.9px] border-zinc-900 w-[63px] h-[45px] justify-center items-center">
                  <p>M</p>
                </div>
                <div className="flex border-[1.9px] border-zinc-900 w-[63px] h-[45px] justify-center items-center">
                  <p>L</p>
                </div>
              </div>
            </div>
          </>
        )}
        {product?.colors?.length > 0 && (
          <>
            <div className="mt-5">
              <p className="text-[18px] font-bold">COLOR:</p>
              <div className="flex gap-3">
                {product.colors.map((color) => {
                  console.log(color);
                  let c = colorsHex[color.toLowerCase()];
                  let cxs = "bg-[" + c + "]";
                  console.log(cxs);
                  return (
                    <>
                      {/* <div className="w-[32px] h-[32px] border-2 border-[#5ECE7B] bg-[#D3D2D5]"></div> */}
                      <div
                        className={`${cxs} w-[32px] h-[32px] border-2 `}
                      ></div>
                    </>
                  );
                })}
              </div>
            </div>
          </>
        )}

        <div className="mt-10">
          <p className="text-[18px] font-bold">PRICE:</p>
          <p className="text-[18px] font-bold mt-3">
            <span>$</span>50.00
          </p>
        </div>
        <div className="mt-10">
          <button className="bg-[#5ECE7B] text-white w-full max-w-[300px] py-4 font-medium">
            ADD TO CART
          </button>
        </div>
        <div className="mt-10">
          <p className="w-full max-w-[300px] font-medium">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
