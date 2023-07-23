import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axiosConfig";

const LoginTab = () => {
  const navigate = useNavigate();
  const [loginDet, setLoginDet] = React.useState({ email: "", password: "" });

  const handleChange = (e) => {
    setLoginDet({ ...loginDet, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5002/api/v1/blog-app/auth/login", loginDet)
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.message);
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
      });
  };
  return (
    <div className="sm:w-10/12 sm:mx-auto md:w-9/12 lg:w-[422px]">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="email_login" className="mt-6 mb-2 font-semibold">Enter your E-mail</label>
        <input
          type="email"
          value={loginDet.email}
          onChange={handleChange}
          name="email"
          id="email_login"
          placeholder="Enter your E-mail"
          required
          className="px-2 outline-blue-300 border-2 border-gray-400 h-10 rounded-md"
        />
        <label htmlFor="password_login" className="mt-6 mb-2 font-semibold">Enter your password</label>
        <input
          type="password"
          value={loginDet.password}
          onChange={handleChange}
          name="password"
          id="password_login"
          placeholder="Enter your password"
          required
          className="px-2 outline-blue-300 border-2 border-gray-400 h-10 rounded-md"
        />
        <button type="submit" className="w-full bg-blue-600 rounded-lg text-white text-center font-bold my-5 py-2">Login</button>
      </form>
    </div>
  );
};

export default LoginTab;
