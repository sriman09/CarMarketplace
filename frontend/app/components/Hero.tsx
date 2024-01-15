"use client";
import React from "react";
import Image from "next/image";
import filter from "../../public/assets/filter.svg";
import { useRouter } from "next/navigation";

function Hero() {
  const router = useRouter();
  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url('/assets/hero1.jpg')` }}
      >
        <div className="w-full flex flex-col gap-2 px-10 md:px-28 h-full pt-32">
          <span className="text-white text-[60px] font-bold">
            LET&apos;S KEEP IT SIMPLE.
          </span>
          <span className="text-[#ffffff73] text-[27px]">
            We are the best when it comes to Cars.
          </span>
          <div className="flex flex-row justify-between items-center mt-14 w-full md:w-4/12 border-b border-gray-500 focus:border-white">
            <input
              type="text"
              placeholder="Search your dream car"
              className="p-2 bg-transparent text-gray-500 focus:text-white text-2xl focus:outline-none"
            />
            <button className="text-gray-500 border-2 border-red-500 rounded-full w-10 h-10 ">
              {"->"}
            </button>
          </div>
          <div className="mt-14 w-full md:w-4/12 h-[52px] flex flex-row gap-4">
            <button
              onClick={() => router.push("/collections")}
              className="bg-red-600 hover:bg-red-800 text-white rounded-2xl w-10/12 h-full transition-all duration-300 ease-in-out hover:delay-200"
            >
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
