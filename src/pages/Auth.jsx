import React, { useState } from "react";
import DOMPurify from "dompurify";
import { useDispatch } from "react-redux";
import {authToggle} from "../redux/async/authSlice";
import { useNavigate } from "react-router-dom";

import auth from "../assets/auth.png";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    emailPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);
    setFormData({ ...formData, [name]: sanitizedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(authToggle());
      navigate("/");
    }
  };
  return (
    <div className="flex justify-betweeen items-center">
      <img src={auth} alt="" className="lg:block hidden max-w-xl xl:max-w-2xl -translate-x-32" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-12 w-full">
        <div className="flex flex-col gap-6">
          <h2 className="font-inter font-medium text-4xl">
            {isLogin ? "Log in to Exclusive" : "Create an account"}
          </h2>
          <p className="font-poppins">Enter your details below</p>
        </div>
        <div className="flex flex-col gap-10">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full border-0 border-b border-black/[.5] py-2 focus:outline-0 focus:border-red duration-200"
          />
          <input
            type="text"
            name="emailPhone"
            value={formData.emailPhone}
            onChange={handleChange}
            placeholder="Email or Phone Number"
            className={`${
              isLogin ? "hidden" : ""
            } w-full border-0 border-b border-black/[.5] py-2 focus:outline-0 focus:border-red duration-200`}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full border-0 border-b border-black/[.5] py-2 focus:outline-0 focus:border-red duration-200"
          />
        </div>
        <div
          className={`font-poppins flex ${
            isLogin ? "relative max-lg:mt-6 flew-row justify-between items-center" : "flex-col"
          } gap-4`}
        >
          <button
            className={`bg-red ${
              isLogin && "lg:max-w-fit px-12"
            } text-white font-medium py-4 w-full rounded-md`}
          >
            {isLogin ? "Log In" : "Create Account"}
          </button>
          {isLogin ? (
            <p className="max-lg:absolute top-0 right-0 max-lg:-translate-y-8 text-red font-medium cursor-pointer">
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
