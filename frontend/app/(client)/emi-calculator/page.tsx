"use client";
import { inventoryState } from "@/app/_utils/atom";
import {
  detailedCarByBrandSelector,
  uniqueBrandNamesSelector,
} from "@/app/_utils/selectors";
import { Inventory } from "@/app/_utils/types";
import Image from "next/image";
import React, { useState } from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";

function EmiCalculator() {
  const uniqueBrandNames = useRecoilValue(uniqueBrandNamesSelector);
  const [selectedBrand, setSelectedBrand] = useState<string>("");

  const detailedCar = useRecoilValue(detailedCarByBrandSelector(selectedBrand));

  const [principal, setPrincipal] = useState<number>(0);
  const [rate, setRate] = useState<number>(9.9);
  const [time, setTime] = useState<number>(5);
  const [emi, setEmi] = useState<number | null>(null);

  function calculateEMI(p: number, r: number, t: number) {
    const monthlyInterestRate = r / 1200; // 12 months in a year
    const numberOfPayments = t * 12; // Monthly payments for the given number of years

    const emi =
      (p *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    setEmi(emi);
  }

  return (
    <div className="min-h-screen bg-[#f2f2f2] flex justify-center">
      <div className="bg-white flex flex-col items-center p-4 w-full md:w-8/12 gap-5 md:my-5 shadow-xl rounded-xl">
        <span className="text-3xl font-bold my-10">EMI CALCULATOR</span>
        <div className="flex gap-5 w-full items-center justify-center">
          <select
            className="w-full md:w-8/12 border border-gray-400 rounded-xl px-4 py-2"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option>Select Brand</option>
            {uniqueBrandNames.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {detailedCar && detailedCar.length > 0 && (
          <>
            <div className="flex w-full md:w-1/2">
              <span className="text-start text-xl font-bold">
                Select Your Car
              </span>
            </div>
            <div className={`flex gap-5 mt-5 mb-10 w-full justify-center`}>
              {detailedCar.map((car, index) => (
                <button
                  key={index}
                  onClick={() => setPrincipal(car.price)}
                  className="w-1/3 md:w-1/4"
                >
                  <Image
                    src={`https://car-marketplace.s3.ap-south-1.amazonaws.com/${car.images[0]}`}
                    alt="image"
                    width={480}
                    height={360}
                    className="rounded-xl"
                  />
                  <div className="flex flex-col ">
                    <span className="font-semibold text-sm text-start">{`${car.year} ${car.brandName} ${car.modelName} ${car.variant}`}</span>
                    <span className="text-start text-lg font-bold">
                      {"₹  " + car.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
        <div className="flex flex-col w-full items-center">
          <div className="w-full md:w-8/12">
            <label className="font-semibold mb-2 text-sm">Loan Amount</label>
          </div>
          <input
            type="number"
            className="w-full md:w-8/12 border border-gray-400 rounded-xl px-4 py-2"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
          />
        </div>

        <div className="flex flex-col w-full items-center">
          <div className="w-full md:w-8/12">
            <label className="font-semibold mb-2 text-sm">
              Annual Interest Rate
            </label>
          </div>
          <input
            type="number"
            className="w-full md:w-8/12 border border-gray-400 rounded-xl px-4 py-2"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="w-full md:w-8/12">
            <label className="font-semibold mb-2 text-sm">
              Term/Period (in years)
            </label>
          </div>
          <input
            type="number"
            className="w-full md:w-8/12 border border-gray-400 rounded-xl px-4 py-2"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
          />
        </div>
        <button
          className="bg-red-600 hover:bg-red-800 text-white rounded-2xl w-1/2 py-2 mt-4 transition-all duration-300 ease-in-out hover:delay-200"
          onClick={() => calculateEMI(principal, rate, time)}
        >
          Calculate
        </button>
        {emi && (
          <span className="text-lg text-gray-900 my-8">
            Total Monthly EMI is{" "}
            <span className="text-xl text-black font-bold">
              ₹{emi.toFixed(2)}
            </span>
          </span>
        )}
      </div>
    </div>
  );
}

export default EmiCalculator;
