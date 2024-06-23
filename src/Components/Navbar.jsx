import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import AppLayout from "./AppLayout";
import { Link } from "react-router-dom";
import logo from "./assites/logo.png"
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="md:hidden block absolute top-16 w-full left-0 right-0 bg-[#FFF]  transition-transform duration-200 transform z-40 ">
      <AppLayout>
        <ul className="text-center text-xl px-[20px] shadow-2xl  transition-transform duration-200 transform  ">
          <li className="my-4 py-4 border-black ">
            <a href="/"  onClick={handleClick}>Home</a>
          </li>
          <li className="my-4 py-4 border-black ">
            <a href="/aboutus"  onClick={handleClick}>About Us</a>
          </li>
          <li className="my-4 py-4 border-black">
            <a href="/#pricing"  onClick={handleClick}>Pricing</a>
          </li>
          <li className="my-4 py-4 border-black">
            <a href="#howItWorks"  onClick={handleClick}>How it Works</a>
          </li>
          <li className="my-4 py-4 border-black">
            <a href="/contactus"  onClick={handleClick}>Contact Us</a>
          </li>
          <li className="my-4 py-4 border-black  text-red-500">
            <a href="/login"  onClick={handleClick}>Log In </a>
          </li>
        </ul>
      </AppLayout>
    </div>
  );

  return (
    <div className="bg-[#FFFFFF] text-black sticky top-0 z-50 drop-shadow-md">
      <AppLayout>
        <nav>
          <div className="h-16 flex justify-between z-20 text-black lg:py-5 px-[20px] py-4 ">
            <div className="flex items-center flex-1">
              <a href="/">
                {/* <span className="text-3xl font-bold">Bizzata</span> */}
                <img src={logo} alt="comLogo" className="h-[50px] w-full" />
              </a>
            </div>
            <div className="md:flex lg:flex-1 items-start justify-end font-normal hidden">
              <div className="flex">
                <ul className="flex gap-4  text-[20px]  font-semibold">
                <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="/">Home</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <Link to="/aboutus">About Us</Link>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                  <Link to="/#pricing">Pricing</Link>
                    
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="#howItWorks">How it Works</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="/contactus">Contact Us</a>
                  </li>

                  <li className="hover:text-red-900 transition  hover:underline  cursor-pointer text-red-500">
                    <a href="/login">Log In</a>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div>{click && content}</div>
            <button
              className="block md:hidden translate text-[#352B3D]"
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
