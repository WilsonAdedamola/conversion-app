import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {

    const navigate = useNavigate()
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const loginDetails = {emailAddress, password}

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(loginDetails);
      let response = await fetch(
        "https://convers-6f30.onrender.com/auth/login",
        {
          method: "POST",
          body: JSON.stringify(loginDetails),
          headers: { "Content-Type": "application/json" },
        }
      );
      response = await response.json();
  
      // if response
      if (response.message) {
        console.log("success message is:", response.message);
        toast.success(response.message);
        console.log("response", response);
  
        // localStorage.setItem("user-info", JSON.stringify(response))
        navigate("home")
      }
  
      // if error
      if (response.err) {
        console.log("error message is:", response.err.message);
        toast.error(response.err.message);
        console.log("response", response);
  
      }
    }

  return (
    <section className="scroll bg-[#282828] flex flex-col items-center justify-center overflow-y-auto h-full px-5">
      <ToastContainer theme=""/>
      <h1 className="text-5xl font-bold w-min self-start">Welcome Back</h1>
      <p className="self-start my-5">Sign in to continue</p>
      <form action="" onSubmit={handleSubmit} className="w-full">
        <input
          type="email"
          placeholder="Email"
          required
          value={emailAddress}
          onChange={(e)=>setEmailAddress(e.target.value)}
          className="bg-[#212325] rounded-xl placeholder:text-[#717171] py-5 px-4 w-full mb-7"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="bg-[#212325] rounded-xl placeholder:text-[#717171] py-5 px-4 w-full"
        />
        <button className="w-full bg-[#0A42CB] rounded-lg p-5 mt-7 font-bold text-xl">
          Sign in
        </button>
      </form>
      <p className="my-7 cursor-pointer">or</p>
      <button onClick={()=>navigate('signup')} className="w-full text-[#0A42CB] bg-white rounded-lg p-5 font-bold text-xl">
          Sign up
        </button>
    </section>
  );
};

export default Signin;
