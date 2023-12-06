import React, { useEffect, useState } from "react";
import fire from "../assets/fire.png";
import cayman from "../assets/cayman.png";
import pounds from "../assets/pounds.png";
import dinar from "../assets/dinar.png";
import star from "../assets/star.svg";
import arrowDown from "../assets/arrow-down.svg";
import arrowUp from "../assets/arrow-up.svg";
import Freq from "../assets/Freq";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    getUser();
  }, []);

  const token = user.token;

  const getUser = async () => {
    let response = await fetch(
      `https://convers-6f30.onrender.com/auth/getUser/${token}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    response = await response.json();

    // if response
    if (response.User) {
      setName(response.User.firstName);
      setCountry(response.User.country);
    }
  };

  return (
    <section className="scroll flex flex-col items-center justify-start w-full px-5 pt-8 overflow-y-auto h-full">
      <ToastContainer theme="colored" />
      <p className="font-bold text-xl mb-10">Home</p>
      <div className="flex items-center justify-between gap-2 w-full">
        {/* user's name */}
        <p className="text-xl">
          Hey <span className="font-bold">{name},</span> Welcome back
        </p>
        <p className="bg-[#151718] rounded-3xl px-4 py-2 font-semibold text-sm cursor-pointer">
          {country}
        </p>
      </div>
      {/* trending */}
      <div className="flex flex-col items-center justify-center gap-4 bg-[#151718] p-4 pb-7 rounded-3xl w-full mt-8">
        <div className="flex items-center justify-between gap-2 w-full px-6">
          <div className="flex items-center gap-3">
            <img src={fire} alt="trending" />
            <p className="">Trending</p>
          </div>
          <p className="text-[#77ED91] font-semibold text-[0.6rem] cursor-pointer">
            See all
          </p>
        </div>
        {/* map data here */}
        <div className="flex items-center justify-between gap-2 w-full px-4 py-3 rounded-[1.9rem] bg-[#212325]">
          <div className="flex items-center justify-between gap-4">
            <p>1</p>
            <img src={pounds} alt="British Pound" />
            <p>British Pound</p>
            <p className="text-xs text-[#A1A1A1]">KD</p>
          </div>
          <Freq />
        </div>

        <div className="flex items-center justify-between gap-2 w-full px-4 py-3 rounded-[1.9rem] bg-[#212325]">
          <div className="flex items-center justify-between gap-4">
            <p>2</p>
            <img src={dinar} alt="British Pound Sterling" />
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

      {/* favorite currency */}
      <p className="text-[0.9rem] self-start my-4">Favorite Currency</p>
      <div className="w-full">
        <table className="w-full">
          <thead>
            <tr className="bg-[#1A1D1E]">
              <th className="p-3 font-normal text-xs">#</th>
              <th className="p-3 font-normal text-xs">Name</th>
              <th className="p-3 font-normal text-xs">Symbol</th>
              <th className="p-3 font-normal text-xs">Price</th>
              <th className="p-3 font-normal text-xs">24H</th>
              <th className="p-3 font-normal text-xs">7D</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="flex gap-2 items-center p-3 w-full">
                <img src={star} alt="Favorite" />
                <p className="text-xs">1</p>
              </td>
              <td className="text-sm">Naira</td>
              <td className="text-xs text-[#A1A1A1] text-center">NGN</td>
              <td className="text-sm">₦1.00</td>
              <td className="">
                <img src={arrowUp} alt="" className="inline-block mr-1" />
                <p className="text-[#2DC24E] text-xs inline-block">0.22%</p>
              </td>
              <td className="">
                <img src={arrowDown} alt="" className="inline-block mr-1" />
                <p className="text-[#F92C2C] text-xs inline-block">3.22%</p>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr className="text-center">
              <td className="flex gap-2 items-center p-3 w-full">
                <img src={star} alt="Favorite" />
                <p className="text-xs">2</p>
              </td>
              <td className="text-sm">US Dollar</td>
              <td className="text-xs text-[#A1A1A1] text-center">USD</td>
              <td className="text-sm">₦920.00</td>
              <td className="">
                <img src={arrowUp} alt="" className="inline-block mr-1" />
                <p className="text-[#2DC24E] text-xs inline-block">0.22%</p>
              </td>
              <td className="">
                <img src={arrowDown} alt="" className="inline-block mr-1" />
                <p className="text-[#F92C2C] text-xs inline-block">3.22%</p>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr className="text-center">
              <td className="flex gap-2 items-center p-3 w-full">
                <img src={star} alt="Favorite" />
                <p className="text-xs">3</p>
              </td>
              <td className="text-sm">Pound st...</td>
              <td className="text-xs text-[#A1A1A1] text-center">GBP</td>
              <td className="text-sm">₦1100.00</td>
              <td className="">
                <img src={arrowUp} alt="" className="inline-block mr-1" />
                <p className="text-[#2DC24E] text-xs inline-block">0.22%</p>
              </td>
              <td className="">
                <img src={arrowDown} alt="" className="inline-block mr-1" />
                <p className="text-[#F92C2C] text-xs inline-block">3.22%</p>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr className="text-center">
              <td className="flex gap-2 items-center p-3 w-full">
                <img src={star} alt="Favorite" />
                <p className="text-xs">4</p>
              </td>
              <td className="text-sm">Ghanaia...</td>
              <td className="text-xs text-[#A1A1A1] text-center">GHS</td>
              <td className="text-sm">₦66.93</td>
              <td className="">
                <img src={arrowUp} alt="" className="inline-block mr-1" />
                <p className="text-[#2DC24E] text-xs inline-block">0.22%</p>
              </td>
              <td className="">
                <img src={arrowDown} alt="" className="inline-block mr-1" />
                <p className="text-[#F92C2C] text-xs inline-block">3.22%</p>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr className="text-center">
              <td className="flex gap-2 items-center p-3 w-full">
                <img src={star} alt="Favorite" />
                <p className="text-xs">5</p>
              </td>
              <td className="text-sm">West Afri...</td>
              <td className="text-xs text-[#A1A1A1] text-center">CFA</td>
              <td className="text-sm">₦1.26</td>
              <td className="">
                <img src={arrowUp} alt="" className="inline-block mr-1" />
                <p className="text-[#2DC24E] text-xs inline-block">0.22%</p>
              </td>
              <td className="">
                <img src={arrowDown} alt="" className="inline-block mr-1" />
                <p className="text-[#F92C2C] text-xs inline-block">3.22%</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* news */}
      <Link
        // to="news"
        className="text-[0.9rem] self-start my-4 cursor-pointer hover:font-semibold"
      >
        News
      </Link>
      <div className="flex items-center justify-between w-full bg-[#151718] rounded-xl gap-4 p-5 cursor-pointer">
        <div className="flex flex-col items-start justify-center max-w-[12rem]">
          <p className="text-xs font-semibold mb-2">USD/JPY is steady below 147.45 resistance ahead of the US ADP report</p>
          <p className="text-xs">
          The US Dollar keeps a mild bid tone on the Early European trading session, with the pair trading within a narrow range below the 147.45...
          </p>
        </div>
        <div className="flex w-full h-32 bg-[#242829] rounded-lg">
          <img src="https://editorial.fxstreet.com/images/Markets/Currencies/Majors/USDJPY/forex-us-and-japanese-currency-pair-with-calculator-4564032_XtraSmall.jpg" alt="" className="rounded-lg"/>
        </div>
      </div>
      <div className="flex items-center justify-between w-full bg-[#151718] rounded-xl gap-4 p-5 my-3 cursor-pointer">
        <div className="flex flex-col items-start justify-center max-w-[12rem]">
          <p className="text-xs font-semibold mb-2">Canada Interest Rate Decision Preview: BoC set for third consecutive pause</p>
          <p className="text-xs">
          The Bank of Canada (BoC) is widely expected to leave its policy rate unchanged at 5% for the third consecutive time on Wednesday when it...
          </p>
        </div>
        <div className="flex w-full h-32 bg-[#242829] rounded-lg">
          <img src="https://editorial.fxstreet.com/images/Resources/Discover/Discover_28_1_XtraSmall.png" alt="" className="rounded-lg"/>
        </div>
      </div>
      <div className="flex items-center justify-between w-full bg-[#151718] rounded-xl gap-4 p-5 cursor-pointer">
        <div className="flex flex-col items-start justify-center max-w-[12rem]">
          <p className="text-xs font-semibold mb-2">India Gold price today: Gold corrects further, according to MCX data</p>
          <p className="text-xs">
          Gold prices fell in India on Wednesday, according to data from India's Multi Commodity Exchange (MCX).
          Gold price stood at 62,045...
          </p>
        </div>
        <div className="flex w-full h-32 bg-[#242829] rounded-lg">
          <img src="https://editorial.fxstreet.com/images/Markets/Commodities/Metals/Gold/stacks-of-gold-bars-19033163_XtraSmall.jpg" alt="" className="rounded-lg"/>
        </div>
      </div>
    </section>
  );
};

export default Home;
