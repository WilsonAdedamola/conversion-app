import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Profile = () => {
  const [data, setData] = useState("");
  const [state, setState] = useState(true);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setState(false)
    toast.info("Logout successful will redirect in 3 seconds");
    setTimeout(() => navigate("/"), 4000);
  };

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;

  useEffect(() => {
    getUser();
  }, []);


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
      setData(response.User);
    }
  };

  // function preventBack() { window.history.forward(); }
  // setTimeout("preventBack()", 0);
  // window.onunload = preventBack()

  // if(!user) return (
  //   <div className="w-full">
  //         <h3 className="mb-6 text-center">You're not logged in</h3>
  //         <button
  //           onClick={() => navigate("/")}
  //           className="w-full text-[#0A42CB] bg-white rounded-lg p-5 font-bold text-xl"
  //         >
  //           Sign in
  //         </button>
  //       </div>
  // )

  return (
    <section className="scroll flex flex-col items-center justify-start w-full px-5 pt-8 overflow-y-auto h-full">
      {/* {state ? (
        <> */}
          <ToastContainer theme="colored" />
          <p className="font-bold text-xl mb-10">Profile</p>
          <div className="flex flex-col items-center justify-center w-full bg-[#151718] rounded-3xl p-7 h-80 mb-10">
            <div className="w-32 h-32 bg-[#D9D9D9] rounded-md"></div>
            <p className="font-semibold text-[1.09rem] mt-3 mb-2">
              {data.firstName} {data.lastName}
            </p>
            <p className="text-sm">{data.emailAddress}</p>
            <p className="text-sm mt-2">
              User Id: <span className="font-semibold">{data.userId}</span>
            </p>
          </div>
          {/* profile settings */}
          <Link to="settings" className="w-full">
            <div className="flex items-center justify-between w-full bg-[#151718] rounded-xl mb-5 p-3 cursor-pointer">
              <div className="flex items-center gap-4 w-full">
                <div className="flex items-center justify-between bg-[#242829] rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="69"
                    height="69"
                    viewBox="0 0 69 69"
                    fill="none"
                  >
                    <rect width="69" height="69" rx="10" fill="#242829" />
                    <path
                      d="M35.0001 38.2833C37.3657 38.2833 39.2835 36.3656 39.2835 34C39.2835 31.6344 37.3657 29.7167 35.0001 29.7167C32.6345 29.7167 30.7168 31.6344 30.7168 34C30.7168 36.3656 32.6345 38.2833 35.0001 38.2833Z"
                      stroke="#0A42CB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M49.2 27.7833L47.4833 24.8167C46.7667 23.5833 45.2 23.1667 43.9667 23.8833L43.1167 24.3667C41.4 25.35 39.2667 24.1167 39.2667 22.1333V21.15C39.2667 19.7333 38.1167 18.5833 36.7 18.5833H33.2667C31.85 18.5833 30.7001 19.7333 30.7001 21.15V22.1333C30.7001 24.1167 28.5667 25.35 26.85 24.3667L26 23.8833C24.7667 23.1667 23.2 23.6 22.4833 24.8167L20.7667 27.7833C20.05 29.0167 20.4833 30.5833 21.7 31.3L22.55 31.7833C24.2667 32.7667 24.2667 35.25 22.55 36.2333L21.7 36.7167C20.4667 37.4333 20.05 39 20.7667 40.2333L22.4833 43.2C23.2 44.4333 24.7667 44.85 26 44.1333L26.85 43.65C28.5667 42.6667 30.7001 43.9 30.7001 45.8833V46.8667C30.7001 48.2833 31.85 49.4333 33.2667 49.4333H36.7C38.1167 49.4333 39.2667 48.2833 39.2667 46.8667V45.8833C39.2667 43.9 41.4 42.6667 43.1167 43.65L43.9667 44.1333C45.2 44.85 46.7667 44.4167 47.4833 43.2L49.2 40.2333C49.9167 39 49.4833 37.4333 48.2667 36.7167L47.4167 36.2333C45.7001 35.25 45.7001 32.7667 47.4167 31.7833L48.2667 31.3C49.5 30.5833 49.9167 29 49.2 27.7833Z"
                      stroke="#0A42CB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-[1.06rem]">Profile Settings</p>
                  <p className="text-xs">Update and modify your Profile</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="24"
                  viewBox="0 0 14 24"
                  fill="none"
                >
                  <path
                    d="M2 22L12 12L2 2"
                    stroke="#0A42CB"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
          {/* transaction history */}
          <Link to="txnhistory" className="w-full">
            <div className="flex items-center justify-between w-full bg-[#151718] rounded-xl mb-5 p-3 cursor-pointer">
              <div className="flex items-center gap-4 w-full">
                <div className="flex items-center justify-between bg-[#242829] rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="69"
                    height="69"
                    viewBox="0 0 69 69"
                    fill="none"
                  >
                    <rect width="69" height="69" rx="10" fill="#242829" />
                    <path
                      d="M43.5667 49.3334H26.4333C24.5333 49.3334 23 47.8 23 45.9V21.9167C23 20.0167 24.5333 18.4833 26.4333 18.4833H43.5667C45.4667 18.4833 47 20.0167 47 21.9167V45.9C46.9834 47.8 45.45 49.3334 43.5667 49.3334Z"
                      stroke="#0A42CB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.1499 25.4333H29.8666"
                      stroke="#0A42CB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M35 25.4333H41.85"
                      stroke="#0A42CB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.1499 34H29.8666"
                      stroke="#0A42CB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M35 34H41.85"
                      stroke="#0A42CB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.1499 42.5667H29.8666"
                      stroke="#0A42CB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M35 42.5667H41.85"
                      stroke="#0A42CB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-[1.06rem]">Transactions</p>
                  <p className="text-xs">Transactions History</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="24"
                  viewBox="0 0 14 24"
                  fill="none"
                >
                  <path
                    d="M2 22L12 12L2 2"
                    stroke="#0A42CB"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
          {/* withdrawal settings */}
          <Link to="" className="w-full">
            <div className="flex items-center justify-between w-full bg-[#151718] rounded-xl mb-5 p-3 cursor-pointer">
              <div className="flex items-center gap-4 w-full">
                <div className="flex items-center justify-between bg-[#242829] rounded-lg">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Layer_1" clipPath="url(#clip0_103_634)">
                      <path
                        id="Vector"
                        d="M32 11.2C32 11.2 11.6824 11.2 8 11.2C5.5392 11.2 4 13.6 4 15.2V32.3072C4 34.3472 5.6528 36 7.6928 36H32.3072C34.3464 36 36 34.3472 36 32.3072V15.0768C36 13.0392 34.0392 11.2 32 11.2Z"
                        stroke="#0B42C8"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_2"
                        d="M29.6 8.8V6.1264C29.6 3.4616 29.0248 2.6928 25.7184 3.5648C23.2896 4.2056 9.0776 8.1456 9.0776 8.1456C4.7008 9.7952 4.0328 11.1992 4.0328 14.3984L4 16.3624"
                        stroke="#0B42C8"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_3"
                        d="M30.8014 25.6C29.6966 25.6 28.7998 24.7056 28.7998 23.6008C28.7998 22.496 29.6966 21.6 30.8014 21.6C31.903 21.6 32.7998 22.496 32.7998 23.6008C32.7998 24.7056 31.903 25.6 30.8014 25.6Z"
                        fill="#0B42C8"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_103_634">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-[1.06rem]">Withdrawal</p>
                  <p className="text-xs">Set withdrawal settings</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="24"
                  viewBox="0 0 14 24"
                  fill="none"
                >
                  <path
                    d="M2 22L12 12L2 2"
                    stroke="#0A42CB"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
          {/* privacy */}
          <div className="flex items-center justify-between w-full bg-[#151718] rounded-xl p-3 cursor-pointer">
            <div className="flex items-center gap-4 w-full">
              <div className="flex items-center justify-between bg-[#242829] rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="69"
                  height="69"
                  viewBox="0 0 69 69"
                  fill="none"
                >
                  <rect width="69" height="69" rx="10" fill="#242829" />
                  <path
                    d="M21.2667 44.1833V37.5333C21.2667 34.6333 23.6167 32.2667 26.5333 32.2667H43.4833C46.3833 32.2667 48.75 34.6167 48.75 37.5333V44.1833C48.75 47.0833 46.4 49.45 43.4833 49.45H26.5333C23.6167 49.45 21.2667 47.1 21.2667 44.1833Z"
                    stroke="#0A42CB"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.4166 32.2833V27.2C26.4166 22.4667 30.2666 18.6166 34.9999 18.6166C39.7333 18.6166 43.5833 22.4667 43.5833 27.2V32.2833H26.4166Z"
                    stroke="#0A42CB"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35 44.3V40"
                    stroke="#0A42CB"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M34.9999 40.8667C35.948 40.8667 36.7166 40.0981 36.7166 39.15C36.7166 38.2019 35.948 37.4333 34.9999 37.4333C34.0519 37.4333 33.2833 38.2019 33.2833 39.15C33.2833 40.0981 34.0519 40.8667 34.9999 40.8667Z"
                    fill="#0A42CB"
                    stroke="#0A42CB"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-[1.06rem]">Privacy</p>
                <p className="text-xs">Change your password</p>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
              >
                <path
                  d="M2 22L12 12L2 2"
                  stroke="#0A42CB"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <p className="my-4 w-full self-start">Others</p>
          {/* logout */}
          <div
            onClick={logout}
            className="flex items-center justify-between w-full bg-[#151718] rounded-xl p-3 cursor-pointer"
          >
            <div className="flex items-center gap-4 w-full">
              <div className="flex items-center justify-between bg-[#242829] rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="69"
                  height="69"
                  viewBox="0 0 69 69"
                  fill="none"
                >
                  <rect width="69" height="69" rx="10" fill="#242829" />
                  <path
                    d="M35 18.5833H45.2C46.5209 18.5245 47.8113 18.9912 48.789 19.8813C49.7666 20.7715 50.3519 22.0127 50.4167 23.3333V44.6667C50.3519 45.9873 49.7666 47.2285 48.789 48.1187C47.8113 49.0088 46.5209 49.4756 45.2 49.4167H35"
                    stroke="#0B42C8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M40 34H19.6333"
                    stroke="#0B42C8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.5833 34L26.25 40.6667"
                    stroke="#0B42C8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.5833 34L26.25 27.3333"
                    stroke="#0B42C8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex">
                <p className="font-bold text-[1.06rem]">Logout</p>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
              >
                <path
                  d="M2 22L12 12L2 2"
                  stroke="#0A42CB"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <Outlet />
        {/* </>
      ) : (
        <div className="w-full">
          <h3 className="mb-6 text-center">You're not logged in</h3>
          <button
            onClick={() => navigate("/")}
            className="w-full text-[#0A42CB] bg-white rounded-lg p-5 font-bold text-xl"
          >
            Sign in
          </button>
        </div>
      )} */}
    </section>
  );
};

export default Profile;
