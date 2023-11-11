import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");

  const details = {
    firstName,
    lastName,
    emailAddress,
    country,
    phoneNumber,
    password,
    pin,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      toast.warn("Password must not be less tha 6 digits");
      return;
    } else {
      if (pin.length > 4 || pin.length < 4) {
        toast.warn("Pin must be 4 digits");
        return;
      } else {
        let response = await fetch(
          "https://convers-6f30.onrender.com/auth/signup",
          {
            method: "POST",
            body: JSON.stringify(details),
            headers: { "Content-Type": "application/json" },
          }
        );
        response = await response.json();

        // if response
        if (response.message) {
          toast.success(response.message);
          console.log("response", response);
          navigate("/");
        }

        // if error
        if (response.err) {
          console.log("error message is:", response.err.message);
          toast.error(response.err.message);
        }
      }
    }
  };

  return (
    <section className="scroll bg-[#282828] absolute flex flex-col items-center py-5 h-full overflow-y-auto px-5">
      <h1 className="text-5xl self-start font-bold">Sign up</h1>
      <p className="self-start my-5">Sign up to continue</p>
      <form action="" className="w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          autoComplete="false"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="bg-[#212325] rounded-xl placeholder:text-[#717171] py-5 px-4 w-full mb-7"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="bg-[#212325] rounded-xl placeholder:text-[#717171] py-5 px-4 w-full mb-7"
        />
        <input
          type="email"
          placeholder="Email"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          required
          className="bg-[#212325] rounded-xl placeholder:text-[#717171] py-5 px-4 w-full mb-7"
        />
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="bg-[#212325] rounded-xl text-[#717171] py-5 px-4 w-full mb-7 focus:text-white outline-none"
        >
          <option value="">Select Country</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Nigeria">Nigeria</option>
          <option value="United States">United States</option>
        </select>
        <input
          type="number"
          placeholder="Phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          className="bg-[#212325] rounded-xl placeholder:text-[#717171] py-5 px-4 w-full mb-7"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="bg-[#212325] rounded-xl placeholder:text-[#717171] py-5 px-4 w-full mb-7"
        />
        <input
          type="number"
          placeholder="Preferred Pin"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          required
          className="bg-[#212325] rounded-xl placeholder:text-[#717171] py-5 px-4 w-full mb-7"
        />
        <button
          type="submit"
          className="w-full bg-[#0A42CB] rounded-lg p-5 mt-7 font-bold text-xl"
        >
          Sign up
        </button>
      </form>
      <p onClick={() => navigate("/")} className="mt-7 cursor-pointer">
        Have an account, Sign in
      </p>
      <ToastContainer theme="colored" className="w-full text-xs" />
    </section>
  );
};

export default Signup;
