import React from "react";
import fromCurrency from "../assets/from.png";
import toCurrency from "../assets/to.png";

const Convert = () => {
  return (
    <section className="scroll flex flex-col items-center justify-start w-full px-5 pt-8 overflow-y-auto h-full">
      <p className="font-bold text-xl mb-10">Convert</p>
      <div className="flex flex-col items-center justify-center gap-2 bg-[#151718] w-full rounded-3xl p-5">
        <p className="justify-self-start w-full ml-10">From:</p>
        <div className="flex items-center gap-3 bg-[#212325] w-full rounded-xl pl-6 overflow-hidden">
          <img src={fromCurrency} alt="" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="50"
            viewBox="0 0 4 50"
            fill="none"
          >
            <path
              d="M2 2L2 48"
              stroke="#151718"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          {/* from currency input box */}
          <input
            type="number"
            placeholder="Naira"
            className="placeholder:text-[#717171] bg-inherit ml-3 pr-2 outline-none"
          />
        </div>

        <p className="justify-self-start w-full ml-10">To:</p>
        <div className="flex items-center gap-3 bg-[#212325] w-full rounded-xl pl-6 overflow-hidden">
          <img src={toCurrency} alt="" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="50"
            viewBox="0 0 4 50"
            fill="none"
          >
            <path
              d="M2 2L2 48"
              stroke="#151718"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          {/* to currency input box */}
          <input
            type="number"
            placeholder="Us Dollars"
            className="placeholder:text-[#717171] bg-inherit ml-3 pr-2 outline-none"
          />
        </div>
        {/* convert button */}
        <button className="w-full bg-[#0A42CB] rounded-lg p-3 mt-3 font-bold text-xl">
          Convert
        </button>
      </div>
      {/* recent conversions */}
      <p className="my-4 justify-self-start w-full">Recent Conversion</p>
      <div className="bg-[#1A1D1E] flex justify-between items-center w-full py-4 px-2">
        <p className="text-xs">Date</p>
        <p className="text-xs">Name</p>
        <p className="text-xs mr-7">Price</p>
      </div>
      <div className="flex justify-between items-center w-full px-2 py-3">
        <p>17th, Aug</p>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="47"
            viewBox="0 0 41 47"
            fill="none"
            className="-ml-16"
          >
            <path
              d="M40 1.5C40.2761 1.5 40.5 1.27614 40.5 1C40.5 0.723858 40.2761 0.5 40 0.5V1.5ZM40 44L35 41.1132V46.8868L40 44ZM40 0.5H11V1.5H40V0.5ZM0.5 11V34H1.5V11H0.5ZM11 44.5H35.5V43.5H11V44.5ZM0.5 34C0.5 39.799 5.20101 44.5 11 44.5V43.5C5.7533 43.5 1.5 39.2467 1.5 34H0.5ZM11 0.5C5.20101 0.5 0.5 5.20101 0.5 11H1.5C1.5 5.7533 5.75329 1.5 11 1.5V0.5Z"
              fill="white"
            />
          </svg>
          <div className="flex flex-col gap-5">
            <p className="text-[#DF2B2B]">Naira</p>
            <p className="text-[#2DC24E]">Dollar</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
            <p className="text-[#DF2B2B]">₦830.00</p>
            <p className="text-[#2DC24E]">$1.00</p>
          </div>
      </div>

      <div className="flex justify-between items-center w-full px-2 py-3">
        <p>1st, Aug</p>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="47"
            viewBox="0 0 41 47"
            fill="none"
            className="-ml-16"
          >
            <path
              d="M40 1.5C40.2761 1.5 40.5 1.27614 40.5 1C40.5 0.723858 40.2761 0.5 40 0.5V1.5ZM40 44L35 41.1132V46.8868L40 44ZM40 0.5H11V1.5H40V0.5ZM0.5 11V34H1.5V11H0.5ZM11 44.5H35.5V43.5H11V44.5ZM0.5 34C0.5 39.799 5.20101 44.5 11 44.5V43.5C5.7533 43.5 1.5 39.2467 1.5 34H0.5ZM11 0.5C5.20101 0.5 0.5 5.20101 0.5 11H1.5C1.5 5.7533 5.75329 1.5 11 1.5V0.5Z"
              fill="white"
            />
          </svg>
          <div className="flex flex-col gap-5">
            <p className="text-[#DF2B2B]">Naira</p>
            <p className="text-[#2DC24E]">Dollar</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
            <p className="text-[#DF2B2B]">₦830.00</p>
            <p className="text-[#2DC24E]">$1.00</p>
          </div>
      </div>

      <div className="flex justify-between items-center w-full px-2 py-3">
        <p>23rd, Jan</p>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="47"
            viewBox="0 0 41 47"
            fill="none"
            className="-ml-16"
          >
            <path
              d="M40 1.5C40.2761 1.5 40.5 1.27614 40.5 1C40.5 0.723858 40.2761 0.5 40 0.5V1.5ZM40 44L35 41.1132V46.8868L40 44ZM40 0.5H11V1.5H40V0.5ZM0.5 11V34H1.5V11H0.5ZM11 44.5H35.5V43.5H11V44.5ZM0.5 34C0.5 39.799 5.20101 44.5 11 44.5V43.5C5.7533 43.5 1.5 39.2467 1.5 34H0.5ZM11 0.5C5.20101 0.5 0.5 5.20101 0.5 11H1.5C1.5 5.7533 5.75329 1.5 11 1.5V0.5Z"
              fill="white"
            />
          </svg>
          <div className="flex flex-col gap-5">
            <p className="text-[#DF2B2B]">Naira</p>
            <p className="text-[#2DC24E]">Dollar</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
            <p className="text-[#DF2B2B]">₦830.00</p>
            <p className="text-[#2DC24E]">$1.00</p>
          </div>
      </div>

      <div className="flex justify-between items-center w-full px-2 py-3">
        <p>23rd, Jan</p>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="47"
            viewBox="0 0 41 47"
            fill="none"
            className="-ml-16"
          >
            <path
              d="M40 1.5C40.2761 1.5 40.5 1.27614 40.5 1C40.5 0.723858 40.2761 0.5 40 0.5V1.5ZM40 44L35 41.1132V46.8868L40 44ZM40 0.5H11V1.5H40V0.5ZM0.5 11V34H1.5V11H0.5ZM11 44.5H35.5V43.5H11V44.5ZM0.5 34C0.5 39.799 5.20101 44.5 11 44.5V43.5C5.7533 43.5 1.5 39.2467 1.5 34H0.5ZM11 0.5C5.20101 0.5 0.5 5.20101 0.5 11H1.5C1.5 5.7533 5.75329 1.5 11 1.5V0.5Z"
              fill="white"
            />
          </svg>
          <div className="flex flex-col gap-5">
            <p className="text-[#DF2B2B]">Naira</p>
            <p className="text-[#2DC24E]">Dollar</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
            <p className="text-[#DF2B2B]">₦830.00</p>
            <p className="text-[#2DC24E]">$1.00</p>
          </div>
      </div>
    </section>
  );
};

export default Convert;
