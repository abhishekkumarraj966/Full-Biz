import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import AppLayout from "./AppLayout";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="lg::hidden block absolute top-16 w-full left-0 right-0 bg-[#7D3C13]  transition-transform duration-200 transform ">
      <AppLayout>
        <ul className="text-center text-xl px-[20px] shadow-2xl  transition-transform duration-200 transform ">
          <li className="my-4 py-4 border-black ">
            <a href="#product"onClick={handleClick}>Product</a>
          </li>
          <li className="my-4 py-4 border-black">
            <a href="#service" onClick={handleClick}>Services</a>
          </li>
          <li className="my-4 py-4 border-black">
            <a href="#blogs" onClick={handleClick}>Blogs</a>
          </li>

          <li className="my-4 py-4 border-black">
            <a href="#gallery"onClick={handleClick}>Gallery</a>
          </li>
          <li className="my-4 py-4 border-black">
            <a href="#contact" onClick={handleClick}>Contact</a>
          </li>
        </ul>
      </AppLayout>
    </div>
  );
  return (
    <div className="bg-[#7D3C13]  text-white sticky top-0 z-50">
      <AppLayout>
        <nav>
          <div className="h-16 flex justify-between z-20 text-white lg:py-5 px-[20px] py-4 ">
            <div className="flex items-center flex-1">
              <a href="/">
                <span className="text-3xl font-bold">Fashionista</span>
                {/* <img src="/" alt="comLogo" /> */}
              </a>
            </div>
            <div className="lg:flex lg:flex-1 items-center justify-end font-normal hidden">
              <div className="flex-10">
                <ul className="flex gap-8 mr-16 text-[18px] ">
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="#product">Product</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="#service">Services</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="#blogs">Blogs</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="#gallery">Gallery</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>{click && content}</div>
            <button
              className="block lg:hidden translate text-white"
              onClick={handleClick}
            >
              {click ? <FaTimes /> : <CiMenuBurger />}
            </button>
          </div>
        </nav>
      </AppLayout>
    </div>
  );
};

export default Navbar;
