import React from "react";
import fire from "../assets/fire.png";
import cayman from "../assets/cayman.png";
import pounds from "../assets/pounds.png";
import dinar from "../assets/dinar.png"; 
import Freq from "../assets/Freq";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full px-3 pt-8">
      <p className="font-bold text-xl mb-10">Home</p>
      <div className="flex items-center justify-between gap-2 w-full">
        {/* user's name */}
        <p className="text-xl">
          Hey <span className="font-bold">Ife,</span> Welcome back
        </p>
        <select
          name=""
          id=""
          className="bg-[#151718] rounded-3xl px-4 py-2 font-bold cursor-pointer"
        >
          <option value="NGN">NGN</option>
        </select>
      </div>
      {/* trending */}
      <div className="flex flex-col items-center justify-center gap-4 bg-[#151718] p-4 pb-7 rounded-3xl w-full mt-8">
        <div className="flex items-center justify-between gap-2 w-full px-6">
          <div className="flex items-center gap-3">
            <img src={fire} alt="trending" />
            <p className="">Trending</p>
          </div>
          <p className="text-[#77ED91] font-semibold text-[0.6rem] cursor-pointer">See all</p>
        </div>
        {/* map data here */}
        <div className="flex items-center justify-between gap-2 w-full px-4 py-3 rounded-[1.9rem] bg-[#212325]">
          <div className="flex items-center justify-between gap-4">
            <p>1</p>
            <img src={dinar} alt="Kuwaiti Dinar" />
            <p>Kuwaiti Dinar</p>
            <p className="text-xs text-[#A1A1A1]">KD</p>
          </div>
          <Freq />
        </div>

        <div className="flex items-center justify-between gap-2 w-full px-4 py-3 rounded-[1.9rem] bg-[#212325]">
          <div className="flex items-center justify-between gap-4">
            <p>2</p>
            <img src={pounds} alt="British Pound Sterling" />
            <p>Kuwaiti Dinar</p>
            <p className="text-xs text-[#A1A1A1]">GBP</p>
          </div>
          <Freq />
        </div>

        <div className="flex items-center justify-between gap-2 w-full px-4 py-3 rounded-[1.9rem] bg-[#212325]">
          <div className="flex items-center justify-between gap-4">
            <p>3</p>
            <img src={cayman} alt="Kuwaiti Dinar" />
            <p>Cayman Islands Dollar</p>
            <p className="text-xs text-[#A1A1A1]">KYD</p>
          </div>
          <Freq />
        </div>
      </div>
    </section>
  );
};

export default Home;
