import React from "react";
import p1 from "./assites/imge.jpg";
import fl from "./assites/A.png";
import what from "./assites/B.png";
import fac from "./assites/c.png";
import you from "./assites/D.png";
import inst from "./assites/E.png";
import amo from "./assites/F.png";
import big from "./assites/G.png";
import im from "./assites/H.png";
import link from "./assites/i.png";
import flip from "./assites/J.png";
import Xi from "./assites/K.png";
import Ax from "./assites/L.png";
import Zo from "./assites/M.png";
import Bo from "./assites/2.png";
const CompanyInfoBox = ({business}) => {
  return (
    <div className="bg-[#7D3C13]" id="about">
       <img
          src={`https://admin.bizzata.in/storage/${business.banner}`}
          className="w-screen" alt="banner"
        />
      <div className="w-[90vw]  pt-[12px] sm:pt-[25px] lg:pt-[43px] mx-auto h-[100%] flex flex-col  items-center ">
        <img
          src={`https://admin.bizzata.in/storage/${business.profile}`}
          className="w-[105px] h-[100px] rounded-[100%] sm:w-[120px] sm:h-[120px] lg:w-[200px]  lg:h-[200px] bg-[#00000046] mt-[-13%] lg:mt-[-8%] border-2 " alt="profile"
        />
        <h2 className="font-bold text-[25px] sm:text-[35px] text-white lg:text-[50px] mt-[7px] sm:mt-[20px] lg:mt-[25px]">
        {business.name}
        </h2>
        <p className="text-[20px] font-bold text-white lg:text-[24px] mt-[8px] lg:mt-[10px]">
        {business.city.name}
        </p>
        <p className="font-normal text-[11px] text-center sm:text-[16px] lg:text-[28px] text-white mt-[8px] sm:mt-[20px] lg:mt-[34px] sm:pb-8">
          “ {business.description}“
        </p>
        <div className=" ml-2 mt-5 md:hidden block py-4 px-4 rounded-full bg-[#D4B294]">
          <div className="flex gap-2 md:gap-4 pb-2 mx-[3%]">
            <a href="">
              <img src={what} alt="Lodinge.." className="h-[34px] w-[34px] " />
            </a>
            <a href="">
              <img
                src={im}
                alt="Lodinge.."
                className="h-[30px] w-[30px] cursor-pointer"
              />
            </a>
            
            <a href="">
              <img
                src={you}
                alt="Lodinge.."
                className="h-[33px] w-[33px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={inst}
                alt="Lodinge.."
                className="h-[30px] w-[30px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={amo}
                alt="Lodinge.."
                className="h-[30px] w-[30px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={big}
                alt="Lodinge.."
                className="h-[30px] w-[30px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={fl}
                alt="Lodinge.."
                className="h-[40px] w-[30px] cursor-pointer mt-[-4px]"
              />
            </a>
          </div>
          <hr className="bg-black h-[1px] mx-[3%]" />
          <div className="flex gap-2 pt-2 mx-[3%]">
          <a href="">
              <img src={fac} alt="Lodinge.." className="h-[40px] w-[35px]" />
            </a>
            <a href="">
              <img
                src={Xi}
                alt="Lodinge.."
                className="h-[40px] w-[40px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={link}
                alt="Lodinge.."
                className="h-[35px] w-[35px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={flip}
                alt="Lodinge.."
                className="h-[35px] w-[35px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={Ax}
                alt="Lodinge.."
                className="h-[35px] w-[30px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={Zo}
                alt="Lodinge.."
                className="h-[40px] w-[40px] cursor-pointer "
              />
            </a>
            <a href="">
              <img
                src={Bo}
                alt="Lodinge.."
                className="h-[40px] w-[40px] cursor-pointer "
              />
            </a>
          </div>
        </div>
        <div className="items-center mt-[-5px] lg:mt-[15px] pb-[20px]  mx-[10%] hidden md:block bg-[#D4B294] pt-4 px-8 rounded-full">
          <ul className="flex gap-[10px] lg:gap-[15px] px-4">
            <a href="">
              <img
                src={what}
                className="h-[50px] w-[50px]  cursor-pointer"
                alt="Lodinge.."
              />
            </a>
            <a href="">
              <img
                src={fac}
                alt="Lodinge.."
                className="h-[50px] w-[50px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={inst}
                alt="Lodinge.."
                className="h-[50px] w-[50px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={you}
                alt="Lodinge.."
                className="h-[50px] w-[50px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={flip}
                alt="Lodinge.."
                className="h-[50px] w-[50px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={big}
                alt="Lodinge.."
                className="h-[50px] w-[50px] cursor-pointer "
              />
            </a>
            <a href="">
              <img
                src={im}
                alt="Lodinge.."
                className="h-[50px] w-[50px] cursor-pointer "
              />
            </a>
            <a href="">
              <img
                src={amo}
                alt="Lodinge.."
                className="h-[50px] w-[50px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={Xi}
                alt="Lodinge.."
                className="h-[50px] w-[50px]  cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={link}
                alt="Lodinge.."
                className="h-[50px] w-[50px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={Ax}
                alt="Lodinge.."
                className="h-[50px] w-[50px]  cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={Zo}
                alt="Lodinge.."
                className="h-[50px] w-[50px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={fl}
                alt="Lodinge.."
                className="h-[50px] w-[50px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={Bo}
                alt="Lodinge.."
                className="h-[50px] w-[50px] cursor-pointer"
              />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoBox;
