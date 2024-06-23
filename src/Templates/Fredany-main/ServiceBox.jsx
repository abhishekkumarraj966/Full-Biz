import React from "react";

const ServiceBox = () => {
  return (
    <div className="w-auto min-h-[368px] sm:min-h-[500px] lg:min-h-[500px] bg-[#d6763b]" >
      <div className="font-bold text-[30px] sm:text-[28px] lg:text-[48px] text-center text-white   pt-[20px] sm:pt-[30px] lg:pt-[50px]">
        Contact <span className="font-[900]">Us</span>
      </div>
      <div className="w-[85%] mx-auto mt-[30px] sm:mt-[55px] lg:mt-[70px] flex flex-col lg:flex-row flex-wrap gap-y-[12px] lg:gap-x-[40px]">
        <div className="w-320px rounded-[5px] sm:rounded-[16px] lg:rounded-[11px] bg-[#D4B294] min-h-[52px] sm:min-h-[65px] lg:min-h-[111px] lg:w-[46%]">
          <div className="min-h-[52px] sm:min-h-[65px] lg:min-h-[111px] gap-2  flex lg:items-center sm:ml-10 lg:ml-0 sm:pt-2 lg:pt-0">
            <img
              src="/assets/At sign.png"
              className="w-[30px] sm:w-[40px] lg:w-[75px] h-[30px] sm:h-[40px] lg:h-[75px]  ml-[15px] my-auto"
            />
            <div className="ml-[11px] lg:ml-[25px] mt-[2px]  sm:pt-1 lg:pt-0">
              <p className="text-[#000000] font-[700] text-[14px] sm:text-[18px] lg:text-[24px] p-0">
                Email-
              </p>
              <p className="font-[400] text-[14px] sm:text-[18px] lg:text-[24px] text-[#000000] p-0">
                <a href="">Freddecor@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-320px rounded-[5px] sm:rounded-[16px] lg:rounded-[11px] bg-[#D4B294] min-h-[52px] sm:min-h-[65px] lg:min-h-[111px] lg:w-[46%]">
          <div className="min-h-[52px] sm:min-h-[65px] lg:min-h-[111px] gap-2  flex lg:items-center sm:ml-10 lg:ml-0 sm:pt-2 lg:pt-0">
            <img
              src="/assets/Number Pad.png"
              className="w-[30px] sm:w-[40px] lg:w-[75px] h-[30px] sm:h-[40px] lg:h-[75px]  ml-[15px] my-auto"
            />
            <div className="ml-[11px] lg:ml-[25px] mt-[2px]  sm:pt-1 lg:pt-0 ">
              <p className="text-[#000000] font-[700] text-[14px] sm:text-[18px] lg:text-[24px] p-0">
                Contact Number -
              </p>
              <p className="font-[400] text-[14px] sm:text-[18px] lg:text-[24px] text-[#000000] p-0">
                <a href="">+91 915 793 2201</a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-320px rounded-[5px] sm:rounded-[16px] lg:rounded-[11px] bg-[#D4B294] min-h-[52px] sm:min-h-[65px] lg:min-h-[111px] lg:w-[46%]">
          <div className="min-h-[52px] sm:min-h-[65px] lg:min-h-[111px] gap-2  flex lg:items-center sm:ml-10 lg:ml-0 sm:pt-2 lg:pt-0">
            <img
              src="/assets/Worldwide Location.png"
              className="w-[30px] sm:w-[40px] lg:w-[75px] h-[30px] sm:h-[40px] lg:h-[75px]  ml-[15px] my-auto"
            />
            <div className="ml-[11px] lg:ml-[25px] mt-[2px]  sm:pt-1 lg:pt-0 ">
              <p className="text-[#000000] font-[700] text-[14px] sm:text-[18px] lg:text-[24px] p-0">
                Location -
              </p>
              <p className="font-[400] text-[14px] sm:text-[18px] lg:text-[24px] text-[#000000] p-0">
                <a href="">shop 19, fred decor,Ahmedabad</a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-320px rounded-[5px] sm:rounded-[16px] lg:rounded-[11px] bg-[#D4B294] min-h-[52px] sm:min-h-[65px] lg:min-h-[111px] lg:w-[46%]">
          <div className="min-h-[52px] sm:min-h-[65px] lg:min-h-[111px] gap-2  flex lg:items-center sm:ml-10 lg:ml-0 sm:pt-2 lg:pt-0">
            <img
              src="/assets/Contact Details.png"
              className="w-[30px] sm:w-[40px] lg:w-[75px] h-[30px] sm:h-[40px] lg:h-[75px]  ml-[15px] my-auto"
            />
            <div className="ml-[11px] lg:ml-[25px] mt-[2px]  sm:pt-1 lg:pt-0 ">
              <p className="text-[#000000] font-[700] text-[14px] sm:text-[18px] lg:text-[24px] p-0">
                Business Category -
              </p>
              <p className="font-[400] text-[14px] sm:text-[18px] lg:text-[24px] text-[#000000] p-0">
                <a href="">Home Decor Gallery</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
