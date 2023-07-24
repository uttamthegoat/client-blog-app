import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css";
import brand from "../../assets/brand.jpg";
import { Links } from "../../assets/constants";

const Navbar = () => {
  let [open, setOpen] = React.useState(false);
  return (
    <div
      className={`${styles.Navbar_Glass} shadow-xl w-full static top-0 left-0`}
    >
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7 sm:z-0 z-[2]">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <img src={brand} alt="Brand_logo" className="w-14 rounded-md" />
          </span>
          Designer
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer sm:hidden"
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
        </div>
        <ul
          className={`${
            styles.Navbar_Navlinks
          } shadow-md sm:shadow-none sm:flex sm:items-center sm:pb-0 pb-12 absolute sm:static sm:z-0 z-[1] left-0 w-full sm:w-auto sm:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-20 opacity-100"
              : "top-[-490px] opacity-0 md:opacity-100"
          }`}
        >
          {Links.map((link) => {
            return (
              <li key={link.id} className="sm:ml-8 text-xl sm:my-0 my-7">
                {link.icon}
                <Link
                  to={link.to}
                  className="ms-2 text-black font-semibold hover:text-red-600 duration-500"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
