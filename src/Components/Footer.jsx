import React from "react";
import img1 from "./assites/Fimg2.png";
import img2 from "./assites/Fimg2.svg";
import img3 from "./assites/Fimg3.svg";
import img4 from "./assites/Fimg4.svg";

import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#000] py-10">
      <div class="grid lg:grid-cols-5 sm:grid-cols-2 gap-2 mx-4 mb-4">
        <div class=" pl-10 lg:pt-28 sm:pt-16 pt-8">
          <div className="flex gap-2">
           
            <a href="https://shopeemart.vercel.app/">
              <img src={img2} alt=""  className="h-[50%] "/>
            </a>
            <a href="https://shopeemart.vercel.app/">
              <img src={img3} alt="" className="h-[50%]" />
            </a>
            <a href="https://shopeemart.vercel.app/">
              <img src={img4} alt="" className="h-[50%]"/>
            </a>
            <a href="https://shopeemart.vercel.app/">
              <img src={img1} alt=""  className="h-[48%] rounded-md "/>
            </a>
          </div>
        </div>
        <div class="">
          <div className="pt-2 ">
            <h2 className="pt-4 font-semibold text-[20px] sm:text-[30px] text-[#EF4444] pl-2">
              Bizzata
            </h2>
            <p className="mt-2 mb-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
              <Link to="/contactus">Contact us</Link>
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
             <Link to="/careers" >Careers</Link>
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
              <Link to="/affilatepg"> Affilate Programme</Link>
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
             <Link to="/testimonials">Testimonials</Link> 
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
             <Link to="/aboutus">About Us</Link> 
            </p>
          </div>
        </div>
        <div class=" ">
          <div className="pt-2 ">
            <h2 className="pt-4 font-semibold text-[20px] sm:text-[30px] text-[#EF4444] pl-2">
              Customer Service
            </h2>
            <p className="mt-2 mb-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
            <Link to="/faq">FAQ</Link> 
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
            <Link to="/privacypolicy">Privacy Policy</Link>
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
            <Link to="/returnsrefunds">Returns & Refunds</Link> 
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
            <Link to="/cookieguidelines"> Cookie Guidelines</Link>
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
            <Link to="/termsconditions"> Terms & Conditions</Link>
            </p>
          </div>
        </div>
        <div class="">
          <div className="pt-2 ">
            <h2 className="pt-4 font-semibold text-[20px] sm:text-[30px] text-[#EF4444] pl-2">
              important Links
            </h2>
            <p className="mt-2 mb-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
             <Link to=""> Terms of Uses</Link>
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
             <Link to="">Copyright</Link> 
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
             <Link to="">Category</Link> 
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
             <Link to="https://www.google.com/maps/@26.1492849,87.4703019,15z?entry=ttu"> Location</Link>
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
             <Link to="/blogpg"> Blogs</Link>
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
            <Link to="">Advertise</Link>  
            </p>
          </div>
        </div>
        <div class="">
          <div className="pt-2 ">
            <h2 className="pt-4 font-semibold text-[20px] sm:text-[30px] text-[#EF4444] pl-2">
              Subscribe Us
            </h2>
            <div className="leading-[13px]">
              <p className="mt-2 mb-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
                subscribe to our newsletter to get
              </p>
              <p className="mt-2 mb-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
                updates about our grand offers.
              </p>
            </div>
            <form
              action=""
              className="mt-4 inline-flex w-full items-center md:w-3/4"
            >
              <input
                className="flex h-10 w-full rounded-md border border-white bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-white/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
              ></input>
              <button
                type="button"
                className="ml-4 rounded-full bg-[#EF4444] px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <FaArrowCircleRight className="h-4 w-4 bg-[#EF4444]" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex mx-10 gap-10">
        <h1 className="text-[20px] text-white pt-4 lg:pl-20">
          &copy; 2024 Bizzata. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
