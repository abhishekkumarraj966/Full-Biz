import React from "react";

import img4 from "./assites/4.png";
import img5 from "./assites/5.png";
import img6 from "./assites/6.png";
import img7 from "./assites/7.png";

import M1 from "./assites/MbW1.png";
import M2 from "./assites/MbW2.png";
import M3 from "./assites/MbW3.png";
import AppLayout from "./AppLayout";

const HowItWorks = ({ id }) => {
  return (
    <div
      className=" bg-[#000] pb-[50px] pt-[10px] sm:h-full overflow-hidden "
      id={id}
    >
      <AppLayout>
        <h1 className="text-center text-white text-[40px] font-bold sm:pt-8 ">
          How it Works ?
        </h1>
        <div className="sm:flex flex-col  mt-10 relative  hidden md:block ">
          {/* see what you can do you can put this div after h1 tag and then use position fix there size  */}
          <div className=" overflow-hidden">
            <img
              src={img7}
              alt=""
              className=" absolute  rotate-[320deg] h-[240px] right-[-1px] top-[70px] lg:top-[12px] sm:top-[50px] lg:h-[602px] sm:h-[450px] sm:right-[108px] lg:right-[228px] sm:rotate-[293deg] "
            />

            <img
              src={img7}
              alt=""
              className=" absolute top-[470px] right-[15px] rotate-[390deg] h-[200px] sm:top-[600px] lg:top-[831px] lg:h-[600px] sm:h-[400px]  sm:right-[120px] lg:right-[170px] sm:rotate-45 z-0"
            />

            <img
              src={img4}
              alt=""
              className=" absolute right-[-50px] h-[150px] top-[-60px] sm:top-[-80px] lg:top-[-43px] lg:h-[433px] sm:h-[300px] sm:right-[-100px] lg:right-[-334px]"
            />
          </div>

          <div className=" flex justify-start">
            {/* image which you download is not perfect size fix it size first */}
            <div>
              <img
                src={M3}
                alt=""
                className=" h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]  "
              />
            </div>
          </div>
          <div className=" flex justify-between mt-[100px]">
            <div className=" self-center">
              <img
                src={img6}
                alt=""
                className=" h-[100px]  sm:h-[300px] lg:w-[320px] lg:h-[320px] "
              />
            </div>
            <div>
              <img
                src={M2}
                alt=""
                className="h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] sm:pb-8  lg:pb-0"
              />
            </div>
          </div>
          <div className=" flex justify-between mt-[100px] z-10">
            <div>
              <img
                src={M1}
                alt=""
                className="h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] "
              />
            </div>
            <div className=" self-center">
              <img
                src={img5}
                alt=""
                className="   h-[100px] lg:h-[400px] sm:h-[250px]"
              />
            </div>
          </div>
        </div>

        <div className="flex-col sm:hidden block mx-auto ">
          <div className="">
            <img
              src={M3}
              alt=""
              className="h-[100%] items-center my-8 mb-16 "
            />
          </div>
          <div className="">
            <img
              src={M2}
              alt=""
              className="h-[400px] items-center  mb-20 ml-[8%]"
            />
          </div>
          <div className="">
            <img src={M1} alt="" className="h-[100%] items-center  mb-8" />
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default HowItWorks;
