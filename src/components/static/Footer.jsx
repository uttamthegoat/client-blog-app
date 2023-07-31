import React from "react";
import styles from "./styles/Static.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#292929] mt-auto text-white">
      <div className="flex flex-col sm:flex-row sm:justify-around py-5">
        {/* Website Info */}
        <section className="px-8 py-4">
          <h1 className="mb-4 font-bold text-xl md:text-2xl">Website Info</h1>
          <ul className="ps-5 space-y-3">
            <li className={`${styles.Footer_Custom_li}`}>
              <Link to="/" className="font-semibold  ms-2">
                Home
              </Link>
            </li>
            <li className={`${styles.Footer_Custom_li}`}>
              <Link to="/about" className="font-semibold  ms-2">
                About Us
              </Link>
            </li>
            <li className={`${styles.Footer_Custom_li}`}>
              <p className="font-semibold ms-2 hover:cursor-pointer">
                Terms of Use
              </p>
            </li>
          </ul>
        </section>
        {/* Contact us */}
        <section className="px-8 py-4">
          <h1 className="mb-4 font-bold text-xl md:text-2xl">Contact Us</h1>
          <ul className="ps-5 space-y-3">
            <li className={`${styles.Footer_Custom_li}`}>
              <a href="tel:+91 8618555625" className="font-semibold  ms-2">
                tel:+91 8618555625
              </a>
            </li>
            <li className={`${styles.Footer_Custom_li}`}>
              <a
                href="mailto:19516uttam@gmail.com"
                className="font-semibold ms-2"
              >
                19516uttam@gmail.com
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="py-3">
        <hr className="w-11/12 mx-auto mb-3" />
        <p className="text-center text-xl px-2">
          Copyright © All rights reserved. Theme Creation Legend by{" "}
          <span className="text-rose-600 font-semibold">uttamthegoat</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
