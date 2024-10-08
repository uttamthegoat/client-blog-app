import React from "react";
import { useNavigate } from "react-router-dom";
import { signup_User } from "./apiCall";
import { useDispatch } from "react-redux";

const SignupTab = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginDet, setLoginDet] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginDet({ ...loginDet, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup_User(loginDet, navigate,dispatch);
  };
  return (
    <div className="sm:w-10/12 sm:mx-auto md:w-9/12 lg:w-[422px]">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="name_signup" className="mt-6 mb-2 font-semibold">
          Enter your Name
        </label>
        <input
          type="text"
          value={loginDet.name}
          onChange={handleChange}
          name="name"
          id="name_signup"
          placeholder="Enter your Name"
          required
          className="px-2 outline-blue-300 border-2 border-gray-400 h-10 rounded-md"
        />
        <label htmlFor="email_signup" className="mt-6 mb-2 font-semibold">
          Enter your E-mail
        </label>
        <input
          type="email"
          value={loginDet.email}
          onChange={handleChange}
          name="email"
          id="email_signup"
          placeholder="Enter your E-mail"
          required
          className="px-2 outline-blue-300 border-2 border-gray-400 h-10 rounded-md"
        />
        <label htmlFor="password_signup" className="mt-6 mb-2 font-semibold">
          Enter your Password
        </label>
        <input
          type="password"
          value={loginDet.password}
          onChange={handleChange}
          name="password"
          id="password_signup"
          placeholder="Enter your password"
          required
          className="px-2 outline-blue-300 border-2 border-gray-400 h-10 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-red-600 rounded-lg text-white text-center font-bold my-5 py-2"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SignupTab;
