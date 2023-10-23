import React from "react";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <section className="scroll flex flex-col items-center justify-start w-full px-5 pt-8 overflow-y-auto h-full">
      <div className="flex items-center justify-between mb-7 w-full">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
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
        </Link>
        <p className="font-bold text-xl w-full text-center">News</p>
      </div>
      <p className="w-full self-start text-[0.9rem] mb-7">Latest News</p>
      <div className="flex flex-col items-center gap-2 w-full">
        <div className="flex items-center justify-between w-full bg-[#151718] rounded-xl gap-4 p-5 cursor-pointer">
          <div className="flex flex-col items-start justify-center max-w-[12rem]">
            <p className="text-2xl font-bold">Title</p>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="flex w-full h-32 bg-[#242829] rounded-lg"></div>
        </div>
        <div className="flex items-center justify-between w-full bg-[#151718] rounded-xl gap-4 p-5 cursor-pointer">
          <div className="flex flex-col items-start justify-center max-w-[12rem]">
            <p className="text-2xl font-bold">Title</p>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="flex w-full h-32 bg-[#242829] rounded-lg"></div>
        </div>
        <div className="flex items-center justify-between w-full bg-[#151718] rounded-xl gap-4 p-5 cursor-pointer">
          <div className="flex flex-col items-start justify-center max-w-[12rem]">
            <p className="text-2xl font-bold">Title</p>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="flex w-full h-32 bg-[#242829] rounded-lg"></div>
        </div>
        <div className="flex items-center justify-between w-full bg-[#151718] rounded-xl gap-4 p-5 cursor-pointer">
          <div className="flex flex-col items-start justify-center max-w-[12rem]">
            <p className="text-2xl font-bold">Title</p>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="flex w-full h-32 bg-[#242829] rounded-lg"></div>
        </div>
        <div className="flex items-center justify-between w-full bg-[#151718] rounded-xl gap-4 p-5 cursor-pointer">
          <div className="flex flex-col items-start justify-center max-w-[12rem]">
            <p className="text-2xl font-bold">Title</p>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="flex w-full h-32 bg-[#242829] rounded-lg"></div>
        </div>
        <div className="flex items-center justify-between w-full bg-[#151718] rounded-xl gap-4 p-5 cursor-pointer">
          <div className="flex flex-col items-start justify-center max-w-[12rem]">
            <p className="text-2xl font-bold">Title</p>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="flex w-full h-32 bg-[#242829] rounded-lg"></div>
        </div>
        <div className="flex items-center justify-between w-full bg-[#151718] rounded-xl gap-4 p-5 cursor-pointer">
          <div className="flex flex-col items-start justify-center max-w-[12rem]">
            <p className="text-2xl font-bold">Title</p>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="flex w-full h-32 bg-[#242829] rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default News;
