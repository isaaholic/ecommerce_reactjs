import React, { useState, useContext } from "react";
import axios from "axios";
import Context from "../contexts/ContextWrapper";
import LetterIcon from "../assets/Letter.svg";
import UserIcon from "../assets/UserRounded.svg";
import LockIcon from "../assets/Lock.svg";

function Register() {
  const [registerUser, setRegisterUser] = useState({});

  const { setUser } = useContext(Context);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterUser((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  };

  const onRegister = (e) => {
    e.preventDefault();
    const request = {
      ...registerUser,
      name: registerUser.name + " " + registerUser.surname,
      surname: undefined,
    };
    axios
      .post("http://localhost:5000/api/auth/register", request)
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <form
      action=""
      onSubmit={onRegister}
      className="flex w-screen justify-center items-center h-screen"
    >
      <div className="flex w-screen items-center flex-col">
        <div className="flex flex-col items-center gap-5">
          <h1 className="font-bold text-5xl">Hello Again!</h1>
          <p className="font-normal text-3xl">Welcome Back</p>
        </div>
        <div className="flex flex-col sm:flex-row mt-[50px] justify-center gap-5 sm:gap-10 w-full">
          <div className="flex flex-col gap-5 sm:gap-10 items-center sm:w-1/2 sm:items-end sm:justify-center sm:my-[40px]">
            <div className="flex items-center gap-2  border w-full h-full max-h-[45px] max-w-[375px] border-[#EEE] rounded-[30px] px-[26px] py-[12px]">
              <img
                className="w-[24px] h-[24px] text-[#C2C2C2]"
                src={UserIcon}
                alt="userIcon"
              />
              <input
                onChange={handleChange}
                type="text"
                value={registerUser.name}
                className="placeholder:text-[#C2C2C2]"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="flex items-center gap-2  border w-full h-full max-h-[45px] max-w-[375px] border-[#EEE] rounded-[30px] px-[26px] py-[12px]">
              <img
                className="w-[24px] h-[24px] text-[#C2C2C2]"
                src={UserIcon}
                alt="userIcon"
              />
              <input
                onChange={handleChange}
                type="text"
                value={registerUser.surname}
                className="placeholder:text-[#C2C2C2]"
                placeholder="Surname"
                name="surname"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 sm:gap-10 items-center sm:w-1/2 sm:items-start justify-center sm:my-[40px]">
            <div className="flex items-center gap-2  border w-full h-full max-h-[45px] max-w-[375px] border-[#EEE] rounded-[30px] px-[26px] py-[12px]">
              <img
                className="w-[24px] h-[24px] text-[#C2C2C2]"
                src={LetterIcon}
                alt="letterIcon"
              />
              <input
                onChange={handleChange}
                type="email"
                value={registerUser.email}
                className="placeholder:text-[#C2C2C2]"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="flex items-center gap-2  border w-full h-full max-h-[45px] max-w-[375px] border-[#EEE] rounded-[30px] px-[26px] py-[12px]">
              <img
                className="w-[24px] h-[24px] text-[#C2C2C2]"
                src={LockIcon}
                alt="lockIcon"
              />
              <input
                onChange={handleChange}
                type="password"
                value={registerUser.password}
                className="placeholder:text-[#C2C2C2]"
                placeholder="Password"
                name="password"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-[30px]">
          <button
            className="h-[56px] w-full max-w-[375px] py-[12px] px-[26px] bg-[#5ECE7B] text-white"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <div className="flex justify-center w-full mt-[12px]">
          <p className="text-[#0F6450] font-semibold">
            Do you have account? <span className="underline">Log in</span>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Register;
