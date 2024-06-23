import React from "react";
import AppLayout from "./AppLayout";
import CategoryMock from "./Mock/CategoryMock";

const AllCategories = () => {
  return (
    <div className=" my-8">
      <h1 className="text-center font-bold text-4xl text-[#000] tracking-1 sm:tracking-2 font-serif mb-8">
        Category's
      </h1>
      <AppLayout>
      <div className="grid lg:grid-cols-10 sm:grid-cols-5 grid-cols-4 gap-1 mx-2">
    {CategoryMock.map((item) => (
      <div key={item.id} className="mt-2 items-center">
        <div className="border-[#DEDEDE] border-[1px] rounded-md h-[75px] w-[75px] drop-shadow-2xl">
          <img src={item.imgSrc} alt="" className="h-[40px] w-[40px] mx-auto mt-[15%]" />
        </div>
        <h2 className="pt-1 font-semibold text-[14px] mx-auto ">{item.name}</h2>
      </div>
    ))}
  </div>
      </AppLayout>
    </div>
  );
};

export default AllCategories;
