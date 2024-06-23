import React, { useState, useEffect } from "react";
// import http from "../http";
import axios from 'axios';
import { Link } from "react-router-dom";
import AppLayout from "./AppLayout";
import img from "./assites/storefront.png";
import show from "./assites/ShowMore.png";

const HomCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://admin.bizzata.in/api/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div className="my-2 mb-8">
      <AppLayout>
        <h1 className="text-center font-bold text-4xl text-[#000] tracking-1 sm:tracking-2 font-serif mb-8">
          Categories
        </h1>
        {/* Mobile Screen */}
        <div className="block">
          <div className="grid lg:grid-cols-10 sm:grid-cols-5 grid-cols-4 gap-1 ml-[14px]">
            {categories.map((category) => (
              <div key={category.id} className="mt-2 items-center">
                <div className="border-black border-[1px] rounded-md h-[75px] w-[75px]">
                  <Link to={`/category/${category.id}/${category.category_name}`}>
                    <img
                      src={'https://admin.bizzata.in/storage/' + (category.icon || img)}
                      onError={(e) => {
                        e.target.src = img; // Replace with default image source on error
                      }}
                      alt=""
                      className="h-[40px] w-[40px] mx-auto mt-[15%]"
                    />
                  </Link>
                </div>
                <Link
            to={{
              pathname: `/category/${category.id}/${category.category_name}`,
              state: { category_id: category.id, category_name: category.category_name },
            }}
          >
                  <h2 className="pt-1 font-semibold text-[14px] mx-auto">
                    {category.category_name}
                  </h2>
                </Link>
              </div>
            ))}
            <div className="mt-2 items-center">
              <div className="border-black border-[1px] rounded-md h-[75px] w-[75px]">
                <Link to="/category">
                  <img
                    src={show}
                    alt=""
                    className="h-[40px] w-[40px] mx-auto mt-[15%] text-[#5F6368] rounded-md"
                  />
                </Link>
              </div>
              <Link to="/category">
                <h2 className="pt-1 font-semibold text-[14px] mx-auto text-[#F26161]">
                  Show more
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default HomCategory;
