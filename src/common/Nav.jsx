import React, { useContext, useState } from "react";
import VSFIcon from "../assets/VSF.svg";
import CartIcon from "../assets/Cart.svg";
import Context from "../contexts/ContextWrapper";
import Logout from "../assets/Logout.svg";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const {
    selectedCategory,
    setSelectedCategory,
    setSelectedCurrency,
    setUser,
  } = useContext(Context);

  const navigate = useNavigate();

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <nav>
      <div className="hidden lg:flex justify-between">
        <ul className="flex w-[50%] gap-8">
          <li
            onClick={() => {
              setSelectedCategory(0);
              navigate("/")
            }}
            className="flex flex-col hover:cursor-pointer  text-center w-[70px] h-[56px]"
          >
            <p
              className={`${
                selectedCategory === 0 && "text-[#5ECE7B]"
              } max-auto font-semibold mb-[30px] mt-[26px]`}
            >
              Cars
            </p>
            <div
              className={`${
                selectedCategory === 0 ? "visible" : "invisible"
              } w-[70px] border border-[#5ECE7B]`}
            ></div>
          </li>
          <li
            onClick={() => {
              setSelectedCategory(1);
              navigate("/")
            }}
            className="flex flex-col hover:cursor-pointer  text-center w-[70px] h-[56px]"
          >
            <p
              className={`${
                selectedCategory === 1 && "text-[#5ECE7B]"
              } max-auto font-semibold mb-[30px] mt-[26px]`}
            >
              Clothing
            </p>
            <div
              className={`${
                selectedCategory === 1 ? "visible" : "invisible"
              } w-[70px] border border-[#5ECE7B]`}
            ></div>
          </li>
          <li
            onClick={() => {
              setSelectedCategory(2);
              navigate("/")
            }}
            className="flex flex-col hover:cursor-pointer text-center w-[70px] h-[56px]"
          >
            <p
              className={`${
                selectedCategory === 2 && "text-[#5ECE7B]"
              } max-auto font-semibold mb-[30px] mt-[26px]`}
            >
              Tech
            </p>
            <div
              className={`${
                selectedCategory === 2 ? "visible" : "invisible"
              } w-[70px] border border-[#5ECE7B]`}
            ></div>
          </li>
        </ul>
        <img
          src={VSFIcon}
          onClick={() => {
            navigate("/");
          }}
          className="mt-[24px] mb-[15px] hover:cursor-pointer"
          alt="my_logo"
        />
        <ul className="flex w-[50%] items-center justify-end gap-8">
          <li className="flex">
            <select
              onChange={handleCurrencyChange}
              className="appearance-none hover:cursor-pointer rounded-md py-2 px-4 leading-tight focus:outline-none"
            >
              <option key="$" value="$">
                $
              </option>
              <option key="₼" value="₼">
                ₼
              </option>
            </select>
          </li>
          <li>
            <img
              src={CartIcon}
              onClick={() => {
                navigate("/cart");
              }}
              className="w-[20px] h-[20px] hover:cursor-pointer"
              alt="cart_icon"
            />
          </li>
          <li>
            <img
              src={Logout}
              onClick={() => {
                setUser({ name: "", id: "", token: "" });
              }}
              className="w-[20px] h-[20px] hover:cursor-pointer"
              alt="logout"
            />
          </li>
        </ul>
      </div>
      <div className="flex flex-col lg:hidden">
        <div className="flex h-[75px] items-center justify-between">
          <div className="ml-5">
            <button
              onClick={() => {
                setOpenNav((preVal) => !preVal);
              }}
              className="text-black"
            >
              ☰
            </button>
          </div>
          <img
            src={VSFIcon}
            className="mt-[24px] mb-[15px] mr-5"
            alt="my_logo"
          />
        </div>
        <div className={`${openNav ? "" : "hidden"}`}>
          <ul className="flex flex-col items-center mb-[25px] gap-8">
            <li className="flex px-5 flex-col text-center w-full h-[56px]">
              <p className="text-[#5ECE7B] max-auto font-semibold mb-[30px] mt-[26px]">
                WOMEN
              </p>
              <div className="w-full border border-[#5ECE7B]"></div>
            </li>
            <li className="flex px-5 flex-col text-center w-full h-[56px]">
              <p className="text-black mx-auto mb-[30px] mt-[26px]">MEN</p>
              <div className="invisible w-full border border-[#5ECE7B]"></div>
            </li>
            <li className="flex px-5 flex-col text-center w-[70px] h-[56px]">
              <p className="text-black mx-auto mb-[30px] mt-[26px]">KIDS</p>
              <div className="invisible w-[70px] border border-[#5ECE7B]"></div>
            </li>
          </ul>
          <ul className="flex items-center justify-center gap-16">
            <li className="flex">
              <select className="appearance-none rounded-md py-2 px-4 leading-tight focus:outline-none">
                <option key="$" value="$">
                  $
                </option>
                <option key="₼" value="₼">
                  ₼
                </option>
              </select>
            </li>
            <li>
              <img
                src={CartIcon}
                className="w-[20px] h-[20px]"
                alt="cart_icon"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
