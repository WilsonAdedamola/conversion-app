import React from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#282828] absolute top-0 scroll right-0 left-0 flex flex-col items-center justify-start w-full px-5 pt-8 overflow-y-auto h-full">
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
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.625 18L14.625 24"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.625 18L14.625 12"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="font-bold text-xl w-full text-center">Profile Settings</p>
      </div>
      <p className="w-full self-start text-[0.9rem] mb-7">Edit Profile</p>
      <div className="flex flex-col gap-2 items-center w-full">
        <div className="flex items-center gap-3 bg-[#212325] w-full rounded-xl pl-6">
          <p className="text-[#717171] w-[25%]">First Name</p>
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
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Ife"
            className="placeholder:font-bold placeholder:text-white bg-inherit ml-3 outline-none"
          />
        </div>

        <div className="flex items-center gap-3 bg-[#212325] w-full rounded-xl pl-6">
          <p className="text-[#717171] w-[25%]">Last Name</p>
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
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Ricardo"
            className="placeholder:font-bold placeholder:text-white bg-inherit ml-3 outline-none"
          />
        </div>

        <div className="flex items-center gap-3 bg-[#212325] w-full rounded-xl pl-6">
          <p className="text-[#717171] w-[25%]">Email</p>
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
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
          <input
            type="email"
            placeholder="ifericardo@gmail.com"
            className="placeholder:font-bold placeholder:text-white bg-inherit ml-3 outline-none"
          />
        </div>

        <div className="flex items-center gap-3 bg-[#212325] w-full rounded-xl pl-6">
          <p className="text-[#717171] w-[25%]">Gender</p>
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
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
          <div className="flex items-start w-[65%]">
            <select className="font-bold w-full bg-inherit ml-3 outline-none">
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-[#212325] w-full rounded-xl pl-6">
          <p className="text-[#717171] w-[25%]">Phone</p>
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
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
          <input
            type="number"
            placeholder="+44775656756"
            className="placeholder:font-bold placeholder:text-white bg-inherit ml-3 outline-none"
          />
        </div>

        <div className="flex items-center gap-3 bg-[#212325] w-full rounded-xl pl-6">
          <p className="text-[#717171] w-[25%]">Country</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="50"
            viewBox="0 0 4 50"
            fill="none"
            className=""
          >
            <path
              d="M2 2L2 48"
              stroke="#151718"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
          <div className="flex items-start w-[65%]">
            <select className="font-bold w-full bg-inherit ml-3 outline-none">
              <option value="">United Kingdom</option>
              <option value="">Nigeria</option>
            </select>
          </div>
        </div>
        <button className="w-full bg-[#0A42CB] rounded-lg p-3 mt-1 font-bold text-xl">
          Update
        </button>
      </div>
    </section>
  );
};

export default Settings;
