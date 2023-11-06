import React from 'react'
import { useNavigate } from 'react-router'

const Transactionhistory = () => {

    const navigate = useNavigate()

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
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.625 18L14.625 24"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.625 18L14.625 12"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="font-bold text-xl w-full text-center">Transaction History</p>
      </div>
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
  )
}

export default Transactionhistory
