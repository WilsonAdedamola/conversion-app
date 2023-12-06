import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Convert = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [result, setResult] = useState(false);
  const [conversions, setConversions] = useState();
  const [recentConversion, setRecentConversion] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;

  const convertDetails = { token, amount, fromCurrency, toCurrency };

  const allCurrencies = [  "NGN", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"]

  // handle currency conversion
  const handleConvert = async () => {
    let response = await fetch(
      "https://convers-6f30.onrender.com/convert/convertFiat",
      {
        method: "POST",
        body: JSON.stringify(convertDetails),
        headers: { "Content-Type": "application/json" },
      }
    );
    response = await response.json();

    // if response
    if (response.message === " Successful") {
      setToAmount(response.toAmount);
      toast.success("Conversion Successful");
      setResult(true);
      return;
    }

    // if error
    if (response.err.message === "err") {
      toast.error("Error");
    }
  };

  // handle get conversion history
  useEffect(() => {
    getConversionHistory();
  }, []);

  const getConversionHistory = async () => {
    let response = await fetch(
      `https://convers-6f30.onrender.com/convert/conversions/${token}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    response = await response.json();

    // if response
    if (response.conversions) {
      setConversions(response.conversions);
      setRecentConversion(true);
    }
  };

  return (
    <section className="scroll flex flex-col items-center justify-start w-full px-5 pt-8 overflow-y-auto h-full">
      <ToastContainer theme="colored" />
      <p className="font-bold text-xl mb-10">Convert</p>
      <div className="flex flex-col items-center justify-center gap-2 bg-[#151718] w-full rounded-3xl p-5">
        <div className="flex justify-between gap-3 items-center w-full">
          {/* from */}
          <div className="w-full flex flex-col items-start justify-start">
            <p className="justify-self-start w-full ml-2">From:</p>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full text-sm bg-[#151718] border rounded-lg py-2 px-1 max-h-40 overflow-y-auto"
            >
              <option value="">Select currency</option>
              {
                allCurrencies.map((currency, id)=>(
                  <option key={id} value={currency}>{currency}</option>
                ))
              }
            </select>
          </div>

          {/* to */}
          <div className="w-full flex flex-col items-start">
            <p className="justify-self-start w-full ml-2">To:</p>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full text-sm bg-[#151718] border rounded-lg py-2 px-1"
            >
              <option value="">Select currency</option>
              {
                allCurrencies.map((currency, id)=>(
                  <option key={id} value={currency}>{currency}</option>
                ))
              }
            </select>
          </div>
        </div>

        <p className="justify-self-start w-full ml-2">Amount:</p>
        <div className="flex items-center bg-[#212325] w-full rounded-xl pl-2 overflow-hidden">
          {/* amount to convert input box */}
          <input
            type="number"
            placeholder="Amount to convert"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="placeholder:text-[#717171] bg-inherit outline-none w-full py-3"
          />
        </div>

        {/* convert button */}
        <button
          onClick={handleConvert}
          className="w-full bg-[#0A42CB] rounded-lg p-3 mt-3 font-bold text-xl"
        >
          Convert
        </button>
        {/* result */}
        {result && (
          <p className="text-lg mt-3">
            Result: <span className="font-semibold">{toAmount}</span>
          </p>
        )}
      </div>
      {/* recent conversions */}
      <p className="my-4 justify-self-start w-full">Recent Conversion</p>
      <div className="bg-[#1A1D1E] flex justify-around items-center w-full py-4 px-2">
        <p className="text-xs">Date</p>
        <p className="text-xs">Name</p>
        <p className="text-xs">Price</p>
      </div>
      {recentConversion ? (
        conversions.map((item) => (
          <div className="flex justify-between items-center w-full px-2 py-3">
            <p key={item.id} className="max-w-[9rem]">{item.updatedAt}</p>
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41"
                height="47"
                viewBox="0 0 41 47"
                fill="none"
                className="-ml-16"
              >
                <path
                  d="M40 1.5C40.2761 1.5 40.5 1.27614 40.5 1C40.5 0.723858 40.2761 0.5 40 0.5V1.5ZM40 44L35 41.1132V46.8868L40 44ZM40 0.5H11V1.5H40V0.5ZM0.5 11V34H1.5V11H0.5ZM11 44.5H35.5V43.5H11V44.5ZM0.5 34C0.5 39.799 5.20101 44.5 11 44.5V43.5C5.7533 43.5 1.5 39.2467 1.5 34H0.5ZM11 0.5C5.20101 0.5 0.5 5.20101 0.5 11H1.5C1.5 5.7533 5.75329 1.5 11 1.5V0.5Z"
                  fill="white"
                />
              </svg>
              <div className="flex flex-col gap-5">
                <p key={item.id} className="text-[#DF2B2B]">{item.fromCurrency}</p>
                <p key={item.id} className="text-[#2DC24E]">{item.toCurrency}</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p key={item.id} className="text-[#DF2B2B]">{item.fromAmount}</p>
              <p key={item.id} className="text-[#2DC24E]">{item.toAmount}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="font-semibold text-lg mt-5">No recent conversions</p>
      )}
    </section>
  );
};

export default Convert;
