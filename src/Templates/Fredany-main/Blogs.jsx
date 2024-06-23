import React from "react";
import img1 from "./assites/img1.png";
import img2 from "./assites/img2.png";
import img3 from "./assites/img3.png";
import AppLayout from "./AppLayout";
import { Link } from "react-router-dom";
const Blogs = () => {
  return (
    <div className="bg-[#d6763b] p-[37px]  mx-auto" id="blogs">
      <AppLayout>
        <div className="mx-auto">

          <h2 className="font-bold text-[30px] text-center sm:text-[28px] lg:text-[32px] pt-[8px] pb-[15px] text-white ">
            Blogs
          </h2>

          <div className="grid sm:grid-cols-3 gap-1 mx-auto">
            <div className=" mt-4 sm:mt-1">
              <Link to="/blogespag">
                <img
                  src={img1}
                  className="w-[350px] h-[400px] sm:h-[300px] sm:w-[250px] lg:w-[400px] lg:h-[450px] rounded-[20px] mx-auto "
                />
              </Link>
              <Link to="/blogespag">
                <p className="font-bold text-center text-[18px] sm:text-[16px] lg:text-[20px] text-white mt-[5px] sm:mt-[14px] lg:mt-[20px]">
                  HandMade Decor
                </p>
              </Link>
            </div>
            <div className=" mt-4 sm:mt-1">
              <Link to="/blogespag">
                <img
                  src={img2}
                  className="w-[350px] h-[400px] sm:h-[300px] sm:w-[250px] lg:w-[400px] lg:h-[450px] rounded-[20px] mx-auto"
                />
              </Link>
              <Link to="/blogespag">
                <p className="font-bold text-center text-[18px] sm:text-[16px] lg:text-[20px] text-white mt-[5px] sm:mt-[14px] lg:mt-[20px]">
                  Crafted Things
                </p>
              </Link>
            </div>
            <div className=" mt-4 sm:mt-1">
              <Link to="/blogespag">
                <img
                  src={img3}
                  className="w-[350px] h-[400px] sm:h-[300px] sm:w-[250px] lg:w-[400px] lg:h-[450px] rounded-[20px] mx-auto "
                />
              </Link>
              <Link to="/blogespag">
                <p className="font-bold text-center text-[18px] sm:text-[16px] lg:text-[20px] text-white mt-[5px] sm:mt-[14px] lg:mt-[20px]">
                  Rope Crafted Decor
                </p>
              </Link>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Blogs;
