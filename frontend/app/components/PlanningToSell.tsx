import Image from "next/image";
import React from "react";
import sell_img from "../../public/assets/sellUsYourCar.jpg";
import sale_img from "../../public/assets/sale.svg";
import customer_img from "../../public/assets/customer.svg";
import time_img from "../../public/assets/time.svg";
import proccessing_img from "../../public/assets/processing.svg";

function PlanningToSell() {
  return (
    <div className="h-[50vh] md:h-screen bg-white px-28 py-20 flex flex-col md:flex-row gap-5 w-full">
      <div className="flex flex-col w-full md:w-5/12">
        <p className="text-black text-4xl font-bold">PLANNING TO SELL?</p>
        <p className="text-blue-200 text-3xl font-bold">SELL US YOUR CAR</p>

        <div className="flex flex-row w-full mt-24">
          <div className="flex w-1/2 gap-2">
            <div className="border-2 border-gray-500 rounded">
              <Image className="p-2 h-12 w-12" src={sale_img} alt="sale_img" />
            </div>
            <div className="flex flex-col">
              <span>Outright</span>
              <strong>Sale</strong>
            </div>
          </div>
          <div className="flex w-1/2 gap-2">
            <div className="border-2 border-gray-500 rounded">
              <Image className="p-2 h-12 w-12" src={time_img} alt="sale_img" />
            </div>
            <div className="flex flex-col">
              <span>Best Offer</span>
              <strong>in 29 minutes</strong>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full mt-12">
          <div className="flex w-1/2 gap-2">
            <div className="border-2 border-gray-500 rounded">
              <Image
                className="p-2 h-12 w-12"
                src={customer_img}
                alt="sale_img"
              />
            </div>
            <div className="flex flex-col">
              <span>500+ Satisfied</span>
              <strong>Customers</strong>
            </div>
          </div>
          <div className="flex w-1/2 gap-2">
            <div className="border-2 border-gray-500 rounded">
              <Image
                className="p-2 h-12 w-12"
                src={proccessing_img}
                alt="sale_img"
              />
            </div>
            <div className="flex flex-col">
              <span>Hassle Free</span>
              <strong>Processing</strong>
            </div>
          </div>
        </div>
        <button className="w-full md:w-1/2 mt-16 flex justify-between text-black hover:text-white bg-white hover:bg-black border-2 border-gray-400 rounded-xl p-2">
          <span>KNOW MORE</span>
          <span>{"->"}</span>
        </button>
      </div>
      <div className="w-full md:w-7/12 hidden md:flex items-center">
        <Image src={sell_img} className="rounded-xl h-[60vh]" alt="img" />
      </div>
    </div>
  );
}

export default PlanningToSell;
