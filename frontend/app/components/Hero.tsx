import React from "react";
import hero_img from "../../public/assets/hero.jpg";
import Image from "next/image";
import filter from "../../public/assets/filter.svg";
function Hero() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url('/assets/hero1.jpg')` }}
      >
        <div className="w-full flex flex-col gap-2 pl-28 h-full pt-32">
          <span className="text-white text-[60px] font-bold">
            LET'S KEEP IT SIMPLE.
          </span>
          <span className="text-[#ffffff73] text-[27px]">
            We are the best when it comes to Cars.
          </span>
          <div className="flex flex-row justify-between items-center mt-14 w-full md:w-4/12 border-b border-gray-500 focus:border-white">
            <input
              type="text"
              placeholder="Search your dream car"
              className="p-2 bg-transparent text-gray-500 text-2xl focus:outline-none"
            />
            <button className="text-gray-500 border-2 border-red-500 rounded-full w-10 h-10 ">
              {"->"}
            </button>
          </div>
          <div className="mt-14 w-full md:w-4/12 h-[52px] flex flex-row gap-4">
            <button className="bg-red-600 text-white rounded-2xl w-10/12 h-full">
              BROWSE COLLECTION
            </button>
            <button className="border border-gray-400 rounded-2xl px-4 hover:bg-slate-950">
              <Image src={filter} alt="filter" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
