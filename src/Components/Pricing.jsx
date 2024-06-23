import React from "react";
import AppLayout from "./AppLayout";

const Pricing = ({ id }) => {
  return (
    <div className="bg-[#000] w-full pb-40" id={id}>
      <AppLayout>
        <div className="">
          <h1 className=" text-center font-semibold   text-[38px] sm:text-[50px] pt-10  pb-2 text-white">
            BiZZATA{" "}
            <span className="text-[#EF4444] text-[14px] sm:text-[40px]">
              YOUR BUSINESS PARTNER
            </span>
          </h1>
          <p className=" font-semibold  text-center pb-14 text-[24px] mx-2 text-white">
            PRICING PLAN
          </p>
        </div>
        <div class="grid grid-cols-1 mx-auto gap-4 sm:grid-cols-2 lg:grid-cols-4  ">

          <div class="w-full max-w-sm p-4 bg-gray-900 border border-gray-200 rounded-lg shadow sm:p-8  mx-auto">
            <h5 class="mb-4 text-xl font-bold text-gray-100 ">Basic plan</h5>
            <div class="flex items-baseline text-white">
              <span class="text-3xl font-semibold">₹</span>
              <span class="text-5xl font-extrabold tracking-tight">4999</span>
              <span class="ms-1 text-xl font-normal text-red-400 ">/year</span>
            </div>
            <ul role="list" class="space-y-5 my-7">
              <li class="flex items-center">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3"> Customer panel</span>
              </li>
              <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3">products -50</span>
              </li>
              <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3">Category -3</span>
              </li>
              <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3">Time Frame - 1 year</span>
              </li>
              <li class="flex line-through decoration-red-300">
                <svg class="flex-shrink-0 w-4 h-4 text-gray-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-400 ms-3">   Top listing</span>
              </li>
              <li class="flex line-through decoration-red-300">
                <svg class="flex-shrink-0 w-4 h-4 text-gray-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-400 ms-3">     Banner ads  month</span>
              </li>
              <li class="flex line-through decoration-red-300">
                <svg class="flex-shrink-0 w-4 h-4 text-gray-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-400 ms-3">   Social media Ads </span>
              </li>
            </ul>
            <button type="button" class="text-white bg-customRed hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
          </div>         
          <div class="w-full max-w-sm p-4 bg-gray-900 border border-gray-200 rounded-lg shadow sm:p-8  mx-auto">
            <h5 class="mb-4 text-xl font-bold text-gray-100 ">Standard plan</h5>
            <div class="flex items-baseline text-white">
              <span class="text-3xl font-semibold">₹</span>
              <span class="text-5xl font-extrabold tracking-tight">7999</span>
              <span class="ms-1 text-xl font-normal text-red-400 ">/year</span>
            </div>
            <ul role="list" class="space-y-5 my-7">
              <li class="flex items-center">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3"> Customer panel</span>
              </li>
              <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3">products -75</span>
              </li>
              <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3">Category -5</span>
              </li>
              <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3">Time Frame - 1 year</span>
              </li>
              <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3"> Top 10 listing</span>
              </li>
              <li class="flex line-through decoration-red-300">
                <svg class="flex-shrink-0 w-4 h-4 text-gray-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-400 ms-3">     Banner ads  month</span>
              </li>
              <li class="flex line-through decoration-red-300">
                <svg class="flex-shrink-0 w-4 h-4 text-gray-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-400 ms-3">   Social media Ads </span>
              </li>
            </ul>
            <button type="button" class="text-white bg-customRed hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
          </div>

         
          <div class="w-full max-w-sm p-4 bg-gray-900 border border-gray-200 rounded-lg shadow sm:p-8  mx-auto">
            <h5 class="mb-4 text-xl font-bold text-gray-100 ">Deluxe plan</h5>
            <div class="flex items-baseline text-white">
              <span class="text-3xl font-semibold">₹</span>
              <span class="text-5xl font-extrabold tracking-tight">9999</span>
              <span class="ms-1 text-xl font-normal text-red-400 ">/year</span>
            </div>
            <ul role="list" class="space-y-5 my-7">
              <li class="flex items-center">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3"> Customer panel</span>
              </li>
              <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3">products -100</span>
              </li>
              <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3">Category -8</span>
              </li>
              <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3">Time Frame - 1 year</span>
              </li>
              <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3"> Top 5 listing</span>
              </li>  <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3"> Banner ads 1 month</span>
              </li>

              <li class="flex line-through decoration-red-300">
                <svg class="flex-shrink-0 w-4 h-4 text-gray-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-400 ms-3">   Social media Ads </span>
              </li>
            </ul>
            <button type="button" class="text-white bg-customRed hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
          </div>


         
          <div class="w-full max-w-sm p-4 bg-gray-900 border border-gray-200 rounded-lg shadow sm:p-8  mx-auto">
            <h5 class="mb-4 text-xl font-bold text-gray-100 ">Platinum plan</h5>
            <div class="flex items-baseline text-white">
              <span class="text-3xl font-semibold">₹</span>
              <span class="text-5xl font-extrabold tracking-tight">14999</span>
              <span class="ms-1 text-xl font-normal text-red-400 ">/year</span>
            </div>
            <ul role="list" class="space-y-5 my-7">
              <li class="flex items-center">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3"> Customer panel</span>
              </li>
              <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3">products -150</span>
              </li>
              <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3">Category -8</span>
              </li>
              <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3">Time Frame - 1 year</span>
              </li>
              <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3"> Top 3 listing</span>
              </li>  <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3"> Banner ads 1 month</span>
              </li>

              <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-customRed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-50  ms-3"> Social Media Ads</span>
              </li>

            </ul>
            <button type="button" class="text-white bg-customRed hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
          </div>
        </div>
       
      </AppLayout>
    </div>
  );
};

export default Pricing;
