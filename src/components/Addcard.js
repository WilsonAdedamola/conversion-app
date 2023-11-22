import React from "react";
import { useNavigate } from "react-router";

const Addcard = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#282828]  top-0 right-0 left-0 flex flex-col items-center justify-start w-full px-5 pt-8 h-full">
      <div className="flex items-center justify-between mb-7 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          onClick={() => navigate(-1)}
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
        <p className="font-bold text-xl w-full text-center">Profile Settings</p>
      </div>
      <p className="font-bold text-5xl my-5">Add Card</p>
      <input
        type="text"
        placeholder="Name"
        className="placeholder:text-[#717171] bg-inherit outline-none w-full rounded-md bg-[#212325] py-3"
      />
      <input
        type="number"
        placeholder="Card Number"
        className="placeholder:text-[#717171] bg-inherit outline-none w-full rounded-md bg-[#212325] my-3 py-3"
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-col">
          <p>Expiring Date</p>
          <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder=""
            className="bg-inherit outline-none w-full rounded-md bg-[#212325] my-3 py-3"
          />
          /
          <input
            type="number"
            placeholder=""
            className="bg-inherit outline-none w-full rounded-md bg-[#212325] my-3 py-3"
          />
          </div>
        </div>
        <div className="flex flex-col">
          <p>CVV</p>
          <input
            type="number"
            placeholder=""
            className="bg-inherit outline-none w-full rounded-md bg-[#212325] my-3 py-3"
          />
        </div>
      </div>
      <button className="w-full bg-[#0A42CB] rounded-lg py-5 font-bold text-xl">
        Continue
      </button>
    </section>
  );
};

export default Addcard;
