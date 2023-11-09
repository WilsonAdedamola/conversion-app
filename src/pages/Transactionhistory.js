import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Transactionhistory = () => {
  const navigate = useNavigate();
  const [txnHistory, setTxnHistory] = useState("");
  const [recentTxn, setRecentTxn] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;

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

  useEffect(()=>{
    getTxnHistory()
  })

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
        <p className="font-bold text-xl w-full text-center">
          Transaction History
        </p>
      </div>
      <div className="bg-[#1A1D1E] flex justify-between items-center w-full py-4 px-2">
        <p className="text-xs">Date</p>
        <p className="text-xs">Amount</p>
        <p className="text-xs mr-7">Status</p>
      </div>
      {recentTxn ? (
        txnHistory.map((txn)=>(
        <div key={txn.id} className="flex justify-between items-center w-full px-2 py-3">
          <p key={txn.id} className="max-w-min">{txn.updatedAt}</p>
          <p key={txn.id} className="">{txn.amount}</p>
          <p className="text-[#0A42CB]">Success</p>
        </div>
        ))
      ) : (
        <p className="font-semibold text-lg mt-5">No recent transaction</p>
      )}
    </section>
  );
};

export default Transactionhistory;
