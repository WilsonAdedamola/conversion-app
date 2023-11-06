import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {

    const navigate = useNavigate()

  return (
    <section className="scroll bg-[#282828] flex flex-col items-center justify-center overflow-y-auto h-full px-5">
      <h1 className="text-5xl font-bold w-min self-start">Welcome Back</h1>
      <p className="self-start my-5">Sign in to continue</p>
      <form action="" className="w-full">
        <input
          type="email"
          placeholder="Email"
          required
          className="bg-[#212325] rounded-xl placeholder:text-[#717171] py-5 px-4 w-full mb-7"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="bg-[#212325] rounded-xl placeholder:text-[#717171] py-5 px-4 w-full"
        />
        <button className="w-full bg-[#0A42CB] rounded-lg p-5 mt-7 font-bold text-xl">
          Sign in
        </button>
      </form>
      <p className="my-7 cursor-pointer">or</p>
      <button onClick={()=>navigate('signup')} className="w-full text-[#0A42CB] bg-white rounded-lg p-5 mt-7 font-bold text-xl">
          Sign up
        </button>
    </section>
  );
};

export default Signin;
