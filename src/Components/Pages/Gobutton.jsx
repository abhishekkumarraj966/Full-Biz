import React from "react";
import arro from "../assites/arro.png";

const Gobutton = () => {
  const goToBtn = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="sticky top-[85%] bottom-[5%] lg:top-[70%] lg:bottom-[4%] z-50">
      <img src={arro} alt="" className="sm:ml-[92%] lg:ml-[95%] ml-[84%] sm:h-[60px] sm:w-[60px] w-[50px] h-[50px]  bg-[#fff]  rounded-full " onClick={goToBtn}/>
    </div>
  );
};

export default Gobutton;
