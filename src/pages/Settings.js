import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Settings = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await fetch(
      `https://convers-6f30.onrender.com/auth/getUser/${token}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    response = await response.json();
    // console.log(response)

    // if response
    if (response.User) {
      setUserData(response.User);
      setFirstName(userData.firstName);
      setLastName(userData.LastName);
      setEmailAddress(userData.emailAddress);
      setCountry(userData.country);
      setPhoneNumber(userData.phoneNumber);
    }
  };

  const userDetails = {
    firstName,
    lastName,
    emailAddress,
    country,
    phoneNumber,
  };

  const handleUserDataUpdate = async () => {
    // if (
    //   firstName == "" ||
    //   lastName == "" ||
    //   emailAddress == "" ||
    //   phoneNumber == "" ||
    //   country == ""
    // ) {
    //   toast.info("Edit your profile");
    // } else {
    let response = await fetch(
      `https://convers-6f30.onrender.com/auth/edit/${token}`,
      {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: { "Content-Type": "application/json" },
      }
    );
    response = await response.json();

    // if response
    if (response.message === "Edit Successful") {
      toast.success(response.message);
      window.location.reload();
    }

    // if error
    if (response.message === "An error occurred") {
      toast.error(response.message);
    }
    // }
  };

  return (
    <section className="bg-[#282828] absolute top-0 scroll right-0 left-0 flex flex-col items-center justify-start w-full px-5 pt-8 overflow-y-auto h-full">
      <ToastContainer theme="colored" />
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
      <p className="w-full self-start text-[0.9rem] mb-7">Edit Profile</p>
      <div className="flex flex-col gap-2 items-center w-full">
        <div className="flex items-center gap-3 bg-[#212325] w-full rounded-xl pl-6 overflow-hidden">
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
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="text"
            placeholder={userData.firstName}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="placeholder:font-bold placeholder:text-white bg-inherit ml-3 outline-none pr-2"
          />
        </div>

        <div className="flex items-center gap-3 bg-[#212325] w-full rounded-xl pl-6 overflow-hidden">
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
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="text"
            placeholder={userData.lastName}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="placeholder:font-bold placeholder:text-white bg-inherit ml-3 outline-none pr-2"
          />
        </div>

        <div className="flex items-center gap-3 bg-[#212325] w-full rounded-xl pl-6 overflow-hidden">
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
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="email"
            placeholder={userData.emailAddress}
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            className="placeholder:font-bold placeholder:text-white bg-inherit ml-3 pr-2 outline-none"
          />
        </div>

        <div className="flex items-center gap-3 bg-[#212325] w-full rounded-xl pl-6 overflow-hidden">
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
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="number"
            placeholder={userData.phoneNumber}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="placeholder:font-bold placeholder:text-white bg-inherit ml-3 pr-2 outline-none"
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
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <div className="flex items-start w-[65%]">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="font-bold w-full bg-[#212325] ml-3 outline-none"
            >
              <option value={userData.country}>{userData.country}</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Nigeria">Nigeria</option>
              <option value="United States<">United States</option>
            </select>
          </div>
        </div>
        <button
          onClick={handleUserDataUpdate}
          className="w-full bg-[#0A42CB] rounded-lg p-3 mt-1 font-bold text-xl"
        >
          Update
        </button>
      </div>
    </section>
  );
};

export default Settings;
