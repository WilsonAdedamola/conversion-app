import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Transfer = () => {
  const [balance, setBalance] = useState("");
  const [txnHistory, setTxnHistory] = useState("");
  const [currency, setCurrency] = useState("GBP");
  const [receiverId, setReceiverId] = useState("");
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const transferDetails = { currency, receiverId, amount, pin, token };

  useEffect(() => {
    getBalance();
    // getTxnHistory()
  }, []);

  const getBalance = async () => {
    let response = await fetch(
      `https://convers-6f30.onrender.com/auth/getUser/${token}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    response = await response.json();

    // if response
    if (response.UserAccount) {
      setBalance(response.UserAccount);
      console.log(balance);
    }
  };

  // const toks = {token}

  // const getTxnHistory = async () => {
  //   let response = await fetch(
  //     "https://convers-6f30.onrender.com/txn/getTxns/",
  //     {
  //       method: "GET",
  //       // body: JSON.stringify(token),
  //       headers: { "Content-Type": "application/json" },
  //     }
  //   );
  //   response = await response.json();
  //   console.log(response)

  //   // if response
  //   // if (response.UserAccount) {
  //   //   setTxnHistory(response.UserAccount);
  //   //   console.log(balance);
  //   // }
  // };

  const handleTransfer = async () => {
    if (receiverId == "") {
      toast.warn("Receiver id cannot be empty");
    } else {
      if (amount == "") {
        toast.warn("Enter amount to transfer");
      } else {
        if (pin == "") {
          toast.warn("Enter pin");
        } else {
          let response = await fetch(
            "https://convers-6f30.onrender.com/txn/transferFunds",
            {
              method: "POST",
              body: JSON.stringify(transferDetails),
              headers: { "Content-Type": "application/json" },
            }
          );
          response = await response.json();
          console.log(response);

          // if response
          // if (response.message === "Successful fund transfer") {
          //   toast.success(response.message);
          //   window.location.reload();
          // }

          //   // if error
          // if (response.message === "User not found" || "incorrect PIN" || "insufficient balance") {
          //   toast.error(response.message);
          // }

          // // if error
          // if (response.message === "An error occurred") {
          //   toast.error(response.message);
          // }
        }
      }
    }
  };

  return (
    <section className="scroll flex flex-col items-center justify-start w-full px-5 pt-8 overflow-y-auto h-full">
      <ToastContainer theme="colored" />
      <p className="font-bold text-xl mb-10">Transfer</p>
      <div className="flex items-center justify-between gap-2 mb-6 w-full">
        <p className="text-xl">Transfer as</p>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="bg-[#151718] rounded-3xl px-4 py-2 font-bold cursor-pointer"
        >
          <option value="NGN">Nigeria Naira</option>
          <option value="GBP">British Pounds</option>
          <option value="USD">Us Dollars</option>
        </select>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 bg-[#151718] w-full rounded-3xl p-5">
        <p className="mb-3 text-sm">
          Balance: <span className="font-semibold">{balance.balance}</span>
        </p>
        <p className="justify-self-start w-full ml-10">To:</p>
        <div className="bg-[#212325] w-full rounded-xl">
          {/* To account input box */}
          <input
            type="text"
            placeholder="Receiver Id"
            value={receiverId}
            onChange={(e) => setReceiverId(e.target.value)}
            className="placeholder:text-[#717171] rounded-xl py-3 px-7 w-full bg-inherit outline-none"
          />
        </div>

        <p className="justify-self-start w-full ml-10">Amount:</p>
        <div className="bg-[#212325] w-full rounded-xl">
          {/* Amount to send */}
          <input
            type="number"
            placeholder="Min: 10"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="placeholder:text-[#717171] w-full bg-inherit py-3 px-7 outline-none"
          />
        </div>

        <p className="justify-self-start w-full ml-10">Your pin:</p>
        <div className="bg-[#212325] w-full rounded-xl">
          {/* Transaction Pin */}
          <input
            type="number"
            placeholder="Your 4 digits pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="placeholder:text-[#717171] w-full bg-inherit py-3 px-7 outline-none"
          />
        </div>

        <p className="text-sm my-4 ml-3">
          <span className="text-[#F92C2C]">Note:</span> We charge a 0.5% service
          fee for each transfer transaction.
        </p>
        {/* send button */}
        <button
          onClick={handleTransfer}
          className="w-full bg-[#0A42CB] rounded-lg py-5 font-bold text-xl"
        >
          Send
        </button>
      </div>
      {/* recent transactions */}
      <p className="my-4 justify-self-start w-full">Recent Transactions</p>
      <div className="bg-[#1A1D1E] flex justify-between items-center w-full py-4 px-2">
        <p className="text-xs">Date</p>
        <p className="text-xs">Amount</p>
        <p className="text-xs mr-7">Status</p>
      </div>
      <div className="flex justify-between items-center w-full px-2 py-3">
        <p>17th, Aug</p>
        <p className="">₦8,300.00</p>
        <p className="text-[#0A42CB]">Pending</p>
      </div>
      <div className="flex justify-between items-center w-full px-2 py-3">
        <p>17th, Aug</p>
        <p className="">$320.00</p>
        <p className="text-[#F92C2C]">Failed</p>
      </div>
      <div className="flex justify-between items-center w-full px-2 py-3">
        <p>17th, Aug</p>
        <p className="">₦8,300.00</p>
        <p className="text-[#2DC24E]">Success</p>
      </div>
      <div className="flex justify-between items-center w-full px-2 py-3">
        <p>17th, Aug</p>
        <p className="">₦8,300.00</p>
        <p className="text-[#2DC24E]">Success</p>
      </div>
      <div className="flex justify-between items-center w-full px-2 py-3">
        <p>17th, Aug</p>
        <p className="">₦8,300.00</p>
        <p className="text-[#0A42CB]">Pending</p>
      </div>
      <div className="flex justify-between items-center w-full px-2 py-3">
        <p>17th, Aug</p>
        <p className="">₦8,300.00</p>
        <p className="text-[#2DC24E]">Success</p>
      </div>
      <div className="flex justify-between items-center w-full px-2 py-3">
        <p>17th, Aug</p>
        <p className="">₦8,300.00</p>
        <p className="text-[#2DC24E]">Success</p>
      </div>
    </section>
  );
};

export default Transfer;
