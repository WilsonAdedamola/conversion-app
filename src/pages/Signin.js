import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const loginDetails = { emailAddress, password };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch("https://convers-6f30.onrender.com/auth/login", {
      method: "POST",
      body: JSON.stringify(loginDetails),
      headers: { "Content-Type": "application/json" },
    });
    response = await response.json();

    // if response
    if (response.message === "Login Successful") {
      toast.success(response.message);
      localStorage.setItem("user", JSON.stringify(response));
      setEmailAddress("");
      setPassword("");
      setTimeout(() => navigate("home"), 4000);
      window.location.reload();
    }

    // if error
    if (
      response.message === "User Does Not Exist" ||
      "Invalid Password For User"
    ) {
      toast.error(response.message);
      setEmailAddress("");
      setPassword("");
    }
  };

  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <section className="scroll absolute w-full bg-[#282828] flex flex-col items-center justify-center overflow-y-auto h-full px-5">
      {user ? (
          <div className="w-full">
            <h3 className="mb-6 text-center">You're Logged in already</h3>
            <button
              onClick={() => navigate("home")}
              className="w-full text-[#0A42CB] bg-white rounded-lg p-5 font-bold text-xl"
            >
              Go home
            </button>
          </div>
      ) : (
        <>
          <ToastContainer theme="colored" />
          <h1 className="text-5xl font-bold w-min self-start">Welcome Back</h1>
          <p className="self-start my-5">Sign in to continue</p>
          <form action="" onSubmit={handleSubmit} className="w-full">
            <input
              type="email"
              placeholder="Email"
              required
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              className="bg-[#212325] rounded-xl placeholder:text-[#717171] py-5 px-4 w-full mb-7"
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#212325] rounded-xl placeholder:text-[#717171] py-5 px-4 w-full"
            />
            <button className="w-full bg-[#0A42CB] rounded-lg p-5 mt-7 font-bold text-xl">
              Sign in
            </button>
          </form>
          <p className="my-7 cursor-pointer">or</p>
          <button
            onClick={() => navigate("signup")}
            className="w-full text-[#0A42CB] bg-white rounded-lg p-5 font-bold text-xl"
          >
            Sign up
          </button>
        </>
      )}
    </section>
  );
};

export default Signin;
