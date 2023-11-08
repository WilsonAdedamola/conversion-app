<p className="justify-self-start w-full ml-10">From:</p>
        <div className="flex items-center gap-3 bg-[#212325] w-full rounded-xl pl-6 overflow-hidden">
          <img src={fromCurrency} alt="" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="50"
            viewBox="0 0 4 50"
            fill="none"
          >
            <path
              d="M2 2L2 48"
              stroke="#151718"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          {/* from currency input box */}
          <input
            type="number"
            placeholder="Naira"
            className="placeholder:text-[#717171] bg-inherit ml-3 pr-2 outline-none"
          />
        </div>

        <p className="justify-self-start w-full ml-10">To:</p>
        <div className="flex items-center gap-3 bg-[#212325] w-full rounded-xl pl-6 overflow-hidden">
          <img src={toCurrency} alt="" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="50"
            viewBox="0 0 4 50"
            fill="none"
          >
            <path
              d="M2 2L2 48"
              stroke="#151718"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          {/* to currency input box */}
          <input
            type="number"
            placeholder="Us Dollars"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="placeholder:text-[#717171] bg-inherit ml-3 pr-2 outline-none"
          />
        </div>