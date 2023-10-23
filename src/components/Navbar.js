import React from "react";
import home from "../assets/Home.svg";
import convert from "../assets/convert.svg";
import profile from "../assets/profile.svg";
import activeHome from "../assets/Active-Home.svg";
import activeConvert from "../assets/active-convert.svg";
import activeProfile from "../assets/active-profile.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bg self-end w-full py-4 mt-2 flex items-center justify-around gap-2">
      <NavLink to="/" className="flex justify-center items-center flex-col">
        {/* <img src={activeHome} alt="" /> */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.78 21.25H9.22V15.3C9.22 14.75 9.67 14.3 10.22 14.3H13.78C14.33 14.3 14.78 14.75 14.78 15.3V21.25V21.25Z"
            stroke="#E1E1E1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.25 11.39V18.1C21.25 19.84 19.91 21.25 18.25 21.25H5.75C4.09 21.25 2.75 19.84 2.75 18.1V11.39C2.75 10.45 3.14 9.57 3.83 8.97L10.08 3.48C11.19 2.5 12.81 2.5 13.92 3.48L20.17 8.97C20.86 9.57 21.25 10.45 21.25 11.39Z"
            stroke="#E1E1E1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="text-[#E1E1E1]">Home</p>
      </NavLink>
      <NavLink
        to="convert"
        className="flex justify-center items-center flex-col"
      >
        {/* <img src={convert} alt="" /> */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.1667 7.79168C20.1667 11.0825 17.4992 13.75 14.2083 13.75C14.0525 13.75 13.8875 13.7409 13.7317 13.7317C13.5025 10.8259 11.1742 8.4975 8.26832 8.26833C8.25916 8.1125 8.25 7.94751 8.25 7.79168C8.25 4.50084 10.9175 1.83334 14.2083 1.83334C17.4992 1.83334 20.1667 4.50084 20.1667 7.79168Z"
            stroke="#E1E1E1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.75 14.2083C13.75 17.4992 11.0825 20.1667 7.79165 20.1667C4.50081 20.1667 1.83331 17.4992 1.83331 14.2083C1.83331 10.9175 4.50081 8.25 7.79165 8.25C7.94748 8.25 8.11247 8.25916 8.2683 8.26832C11.1741 8.49749 13.5025 10.8258 13.7317 13.7317C13.7408 13.8875 13.75 14.0525 13.75 14.2083Z"
            stroke="#E1E1E1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.12414 1.83334H2.74998C2.24581 1.83334 1.83331 2.24584 1.83331 2.75001V5.12417C1.83331 5.94001 2.82331 6.3525 3.40081 5.775L5.77497 3.40084C6.3433 2.82334 5.93998 1.83334 5.12414 1.83334Z"
            stroke="#E1E1E1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.8758 20.1667H19.25C19.7541 20.1667 20.1666 19.7542 20.1666 19.25V16.8758C20.1666 16.06 19.1766 15.6475 18.5991 16.225L16.225 18.5992C15.6566 19.1767 16.06 20.1667 16.8758 20.1667Z"
            stroke="#E1E1E1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="text-[#E1E1E1]">Convert</p>
      </NavLink>
      <NavLink
        to="profile"
        className="flex justify-center items-center flex-col"
      >
        {/* <img src={profile} alt="" /> */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 11C13.5313 11 15.5834 8.94798 15.5834 6.41668C15.5834 3.88537 13.5313 1.83334 11 1.83334C8.46872 1.83334 6.41669 3.88537 6.41669 6.41668C6.41669 8.94798 8.46872 11 11 11Z"
            stroke="#E1E1E1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.8742 20.1667C18.8742 16.6192 15.345 13.75 11 13.75C6.65502 13.75 3.12585 16.6192 3.12585 20.1667"
            stroke="#E1E1E1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="text-[#E1E1E1]">Profile</p>
      </NavLink>
    </nav>
  );
};

export default Navbar;
