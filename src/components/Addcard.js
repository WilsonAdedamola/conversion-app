import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Addcard = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#282828] absolute z-10 top-0 right-0 left-0 flex flex-col items-center justify-start w-full px-5 pt-8 h-full">
      <div className="flex items-center justify-between mb-7 w-full">
        <Link to="transfer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          onClick={() => navigate("transfer")}
          className="w-fit"
        >
          <path
            d="M27 18L8.625 18"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.625 18L14.625 24"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.625 18L14.625 12"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        </Link>
      </div>
      <p className="font-bold text-5xl my-16 self-start">Add Card</p>
      <input
        type="text"
        placeholder="Name"
        className="placeholder:text-[#717171] px-3 outline-none w-full rounded-lg bg-[#212325] py-4"
      />
      <input
        type="number"
        placeholder="Card Number"
        className="placeholder:text-[#717171] px-3 outline-none w-full rounded-lg bg-[#212325] my-3 py-4"
      />
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center flex-col w-[40%]">
          <p className="text-[#717171]">Expiring Date</p>
          <div className="flex items-center gap-1">
            <input
              type="number"
              placeholder=""
              className="px-3 outline-none w-full rounded-lg bg-[#212325] my-3 py-3"
            />
            <p className="text-[#717171] text-4xl">/</p>
            <input
              type="number"
              placeholder=""
              className="px-3 outline-none w-full rounded-lg bg-[#212325] my-3 py-3"
            />
          </div>
        </div>
        <div className="flex flex-col w-[40%]">
          <p className="text-[#717171]">CVV</p>
          <input
            type="number"
            placeholder=""
            className="px-3 outline-none w-full rounded-md bg-[#212325] my-3 py-3"
          />
        </div>
      </div>
      <button className="w-full bg-[#0A42CB] rounded-lg py-5 font-bold text-xl mt-10">
        Continue
      </button>
    </section>
  );
};

export default Addcard;
