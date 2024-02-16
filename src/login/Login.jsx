import React, { useContext, useState } from "react";
import LetterIcon from "../assets/Letter.svg";
import LockIcon from "../assets/Lock.svg";
import Context from "../contexts/ContextWrapper";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginUser, setLoginUser] = useState({});

  const { setUser } = useContext(Context);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginUser((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  };

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/login", loginUser)
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
      onSubmit={onLogin}
      className="flex w-screen justify-center items-center h-screen"
    >
      <div className="flex w-screen items-center flex-col">
        <div className="flex flex-col items-center gap-5">
          <h1 className="font-bold text-5xl">Hello Again!</h1>
          <p className="font-normal text-3xl">Welcome Back</p>
        </div>
        <div className="flex flex-col sm:flex-row mt-[50px] justify-center gap-5 sm:gap-10 w-full">
          <div className="flex flex-col gap-5 sm:gap-10 items-center w-full justify-center sm:my-[40px]">
            <div className="flex items-center gap-2  border w-full h-full max-h-[45px] max-w-[375px] border-[#EEE] rounded-[30px] px-[26px] py-[12px]">
              <img
                className="w-[24px] h-[24px] text-[#C2C2C2]"
                src={LetterIcon}
                alt="letterIcon"
              />
              <input
                onChange={handleChange}
                value={loginUser.email}
                type="email"
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
                value={loginUser.password}
                type="password"
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
            Login
          </button>
        </div>
        <div className="flex justify-center w-full mt-[12px]">
          <p className="text-[#0F6450] font-semibold">
            Do not have account?{" "}
            <span
              className="underline hover:cursor-pointer"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Login;
