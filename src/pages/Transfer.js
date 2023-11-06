import React from "react";

const Transfer = () => {
  return (
    <section className="scroll flex flex-col items-center justify-start w-full px-5 pt-8 overflow-y-auto h-full">
      <p className="font-bold text-xl mb-10">Transfer</p>
      <div className="flex items-center justify-between gap-2 mb-6 w-full">
        <p className="text-xl">
          Transfer as
        </p>
        <select
          className="bg-[#151718] rounded-3xl px-4 py-2 font-bold cursor-pointer"
        >
          <option value="NGN">British Pounds</option>
          <option value="NGN">Nigerian Naira</option>
          <option value="NGN">Us Dollars</option>
        </select>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 bg-[#151718] w-full rounded-3xl p-5">
        <p className="justify-self-start w-full ml-10">To:</p>
        <div className="bg-[#212325] w-full rounded-xl">
          {/* To account input box */}
          <input
            type="text"
            placeholder="Account Number or Email"
            className="placeholder:text-[#717171] rounded-xl py-3 px-7 w-full bg-inherit outline-none"
          />
        </div>

        <p className="justify-self-start w-full ml-10">Amount:</p>
        <div className="bg-[#212325] w-full rounded-xl">
          {/* Amount to send */}
          <input
            type="number"
            placeholder="Min: 10"
            className="placeholder:text-[#717171] w-full bg-inherit py-3 px-7 outline-none"
          />
        </div>
        <p className="text-sm my-4 ml-3"><span className="text-[#F92C2C]">Note:</span> We charge a 0.5% service fee for each
transfer transaction.</p>
        {/* send button */}
        <button className="w-full bg-[#0A42CB] rounded-lg py-5 font-bold text-xl">
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
