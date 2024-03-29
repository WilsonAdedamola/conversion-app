import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Transfer = () => {
  const [balance, setBalance] = useState("0.0");
  const [txnHistory, setTxnHistory] = useState("");
  const [recentTxn, setRecentTxn] = useState(false);
  const [currency, setCurrency] = useState("GBP");
  const [receiverId, setReceiverId] = useState("");
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");
  const [revealChannel, setRevealChannel] = useState(true);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const transferDetails = { currency, receiverId, amount, pin, token };

  useEffect(() => {
    getBalance();
    getTxnHistory();
  }, []);

  // handle get balance
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
      setBalance(response.UserAccount.balance);
    }
  };

  // handle get transaction history
  const getTxnHistory = async () => {
    let response = await fetch(
      `https://convers-6f30.onrender.com/txn/getTxns/${token}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    response = await response.json();

    // if response
    if (response) {
      setTxnHistory(response);
      setRecentTxn(true);
    }
  };

  // handle transfer
  const handleTransfer = async () => {
    if (receiverId === "") {
      toast.warn("Receiver id cannot be empty");
    } else {
      if (amount === "") {
        toast.warn("Enter amount to transfer");
      } else {
        if (amount < 10) {
          toast.warn("Amount cannot be less than 10");
        } else {
          if (pin === "") {
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

            // if response
            if (response.message === "Transfer Successful") {
              toast.success(response.message);
              setTimeout(() => window.location.reload(), 3000);
            }

            // if error
            if (
              response.message === "User not found" ||
              response.message === "Incorrect Pin" ||
              response.message === "Insufficient balance"
            ) {
              toast.error(response.message);
            }

            // if error
            if (response.message === "An error occurred") {
              toast.error(response.message);
            }
          }
        }
      }
    }
  };

  return (
    <>
      {revealChannel && (
        <div className="flex flex-col gap-5 absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-black rounded-2xl text-sm p-4">
          <p>Select Channel</p>
          <div className="flex justify-between items-center px-2">
            <div className="flex flex-col items-start">
              <p>Balance</p>
              <p>$100000000</p>
            </div>
            <div className="p-2 bg-[#0A42CB] rounded-full border"></div>
          </div>
          <div className="flex justify-between items-center px-2">
            <div className="flex flex-col items-start">
              <p>Card</p>
              <p>$3512 4667 **** ****</p>
            </div>
            <div className="p-2 bg-transparent rounded-full border"></div>
          </div>
          <button
            onClick={() => setRevealChannel(false)}
            className="w-full bg-[#0A42CB] rounded-lg py-5 font-bold text-xl"
          >
            Continue
          </button>
          <Link to="addcard">
            <button
              className="w-full text-[#0A42CB] bg-white rounded-lg py-5 font-bold text-xl"
              onClick={()=>navigate("addcard")}
            >
              Add Card
            </button>
          </Link>
        </div>
      )}
      <section
        className={
          revealChannel
            ? "scroll blur pointer-events-none select-none flex flex-col items-center justify-start w-full px-5 pt-8 overflow-y-auto h-full"
            : "scroll flex flex-col items-center justify-start w-full px-5 pt-8 overflow-y-auto h-full"
        }
      >
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
            Balance:{" "}
            <span className="font-semibold">
              {parseFloat(balance).toFixed(2)}
            </span>
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
            <span className="text-[#F92C2C]">Note:</span> We charge a 0.5%
            service fee for each transfer transaction.
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
        {recentTxn ? (
          txnHistory.map((txn) => (
            <div
              key={txn.id}
              className="flex justify-between items-center w-full px-2 py-3"
            >
              <p key={txn.id} className="max-w-min">
                {txn.updatedAt}
              </p>
              <p key={txn.id} className="">
                {txn.amount}
              </p>
              <p className="text-[#0A42CB]">Success</p>
            </div>
          ))
        ) : (
          <p className="font-semibold text-lg mt-5">No recent transaction</p>
        )}
      </section>
    </>
  );
};

export default Transfer;
