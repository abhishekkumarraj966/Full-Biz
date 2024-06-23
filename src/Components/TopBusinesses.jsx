import React, { useEffect, useState } from "react";
import axios from "axios";
import AppLayout from "./AppLayout";
import img from "./assites/storefront.png";
import { Link } from "react-router-dom";
// import http from "../http";
import createSlug from './createSlug';
const TopBusinesses = () => {
  const [topBusinesses, setTopBusinesses] = useState([]);

  useEffect(() => {
    axios
      .get("https://admin.bizzata.in/api/top-businesses")
      .then((response) => {
        setTopBusinesses(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the top businesses!", error);
      });
  }, []);

const sliceParagraph = (paragraph, wordCount) => {
  return paragraph.split(" ").slice(0, wordCount).join(" ") + (paragraph.split(" ").length > wordCount ? "..." : "");
};

  return (
    <div className="my-2 pt-4 mx-auto  h-ful lg:h-[600px]">
      <AppLayout>
        <div className="mx-4">
          <h1 className="text-center font-semibold text-[#F26161] tracking-[5px]  font-serif">
            CUSTOMER FAVORITES
          </h1>
          <div className=" mx-auto w-[270px]">
            <p className="text-center pt-2 font-bold text-[30px] leading-9 tracking-wide ">
              This Week's Top 5 Businesses{" "}
            </p>
          </div>

          <div className="flex py-4 sm:gap-2 lg:gap-6 justify-center md:justify-space flex-wrap mx-auto">
            {topBusinesses && topBusinesses.length > 0 ? (
              topBusinesses.slice(0, 5).map((business, index) => (
                <div key={index} className="lg:my-6 lg:pb-6 my-6">
                  <div className="rounded-2xl shadow-md shadow-[#f9b7b7] flex flex-row items-start justify-start py-1 pb-2 pr-1 pl-4 box-border relative gap-2 h-[130px] w-[320px] sm:w-[350px] md:w-[350px] border-black border-2">
                    <a href="#">
                      <img
                        className="w-28 h-fit mt-8 border object-cover"
                        loading="lazy"
                        alt=""
                        src={'https://admin.bizzata.in/storage/' + business.business.profile || img}
        
                        onError={(e) => {
                          e.target.src = img; // Replace the image source with default image source on error
                        }}
                      />
                    </a>
                    <div className="items-start justify-start gap-[15px]">
                      <div className="items-start justify-start">
                        <div className="relative sm:tracking-[2px] tracking-[0.5px] sm:leading-[35px] leading-[15px] font-semibold sm:text-[20px] text-[18px] inline-block">
                          <Link to={`/${createSlug(business.business.city.name)}/${business.slug}`} target="_blank">
                                {business.business_name}
                            </Link>
                        </div>
                        <div className="self-stretch relative sm:text-[16px] tracking-[0.48px] inline-block leading-[20px] sm:leading-[19px]">
                          <p className="ml-2">{sliceParagraph(business.business.description, 10)}...</p>
                        </div>
                      </div>
                      <div className="mt-6">
                        
                          <span className="font-semibold text-md">City: {business.business.city.name}</span>
                            
                          
                        
                      </div>
                    </div>
                    <div className="sm:h-12 h-8 sm:w-12 w-8 absolute !m-[0] sm:top-[-16px] top-[-12px] sm:left-[-10px] left-[-14px] text-center text-21xl text-white  bg-[#EF4444]  rounded-full">
                      <div className="absolute sm:top-[9px] top-[2px] sm:left-[18px] left-[12px] sm:tracking-[0.48px] leading-[24px] font-medium flex items-center justify-center sm:text-[25px] text-[20px]">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No top businesses found</p>
            )}
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default TopBusinesses;
