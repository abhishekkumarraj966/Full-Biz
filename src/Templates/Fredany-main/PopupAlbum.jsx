import { GrFormPrevious } from "react-icons/gr";
import React from "react";
import { GrFormNext } from "react-icons/gr";

let imagarr = [
  "/assets/unsplash_SVb7lJc1tZ0.jpg",
  "/assets/unsplash_7tOV35hnkao.jpg",
  "/assets/unsplash_ea-Vg1hWjEI.jpg",
  "/assets/unsplash_tuJtzghMuEw.jpg",
  "/assets/unsplash_W5dsm9n6e3g.jpg",
]; // if you want to add some image then , gice url in this array

const PopupAlbum = ({ setIsPopupOpen, imsg, setImage }) => {
  let handleNextImage = () => {
    if (imsg === imagarr.length - 1) {
      setImage(0);
    } else {
      setImage(imsg + 1);
    }
  };

  let handlePrevImage = () => {
    if (imsg === 0) {
      setImage(imagarr.length - 1);
    } else {
      setImage(imsg - 1);
    }
  };
  return (
    <div className="h-screen w-[100%] lg:w-[1100px] sm:mt-[5%] mt-[12%] sm:w-[100%] bg-[#1f1c147c] fixed top-0 flex justify-center items-center z-10 ml-[-14%] sm:ml-[-5%] md:ml-[-6%] lg:ml-[0%]  sm:mx-auto  ">
      <div
        className="text-right mt-2  text-white text-[31px] absolute right-5 top-3 cursor-pointer"
        onClick={() => setIsPopupOpen(false)}
      >
        X
      </div>

      <div className="flex w-full items-center">
        <div
          className="text-[50px]  text-white cursor-pointer z-10 absolute left-0 bg-[#00000081]"
          onClick={handlePrevImage}
        >
          <GrFormPrevious />
        </div>
        <img
          src={imagarr[imsg]}
          className="w-[90%] transition-transform transform duration-100 hover:scale-110 h-[95%] mx-auto md:h-[400px]  lg:h-[400px]  lg:rounded-[1px]"
          alt="Image 1"
        />
        <div
          className="text-[50px] text-white cursor-pointer absolute z-10 right-0 bg-[#00000069]"
          onClick={handleNextImage}
        >
          <GrFormNext />
        </div>
      </div>
    </div>
  );
};

export default PopupAlbum;
