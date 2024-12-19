import React, { useState } from "react";
import auth from "../assets/auth.png";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-betweeen items-center">
      <img src={auth} alt="" className="2xl:block hidden h-[50rem] -translate-x-32" />
      <form className="flex flex-col gap-12 w-full">
        <div className="flex flex-col gap-6">
          <h2 className="font-inter font-medium text-4xl">
            {isLogin ? "Log in to Exclusive" : "Create an account"}
          </h2>
          <p className="font-poppins">Enter your details below</p>
        </div>
        <div className="flex flex-col gap-10">
          <input
            type="text"
            placeholder="Name"
            className="w-full border-0 border-b border-black/[.5] py-2 focus:outline-0 focus:border-red duration-200"
          />
          <input
            type="text"
            placeholder="Email or Phone Number"
            className={`${
              isLogin ? "hidden" : ""
            } w-full border-0 border-b border-black/[.5] py-2 focus:outline-0 focus:border-red duration-200`}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border-0 border-b border-black/[.5] py-2 focus:outline-0 focus:border-red duration-200"
          />
        </div>
        <div
          className={`font-poppins flex ${
            isLogin ? "flew-row justify-between items-center" : "flex-col"
          } gap-4`}
        >
          <button
            onClick={handleSubmit}
            className={`bg-red ${
              isLogin && "max-w-fit px-12"
            } text-white font-medium py-4 w-full rounded-md`}
          >
            Create Account
          </button>
          {isLogin ? (
            <p className="text-red font-medium cursor-pointer">
              Forget Password?
            </p>
          ) : (
            <p>
              Already have account?
              <span
                onClick={() => setIsLogin(true)}
                className="font-medium underline underline-offset-8 cursor-pointer mx-3"
              >
                Log in
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Auth;
