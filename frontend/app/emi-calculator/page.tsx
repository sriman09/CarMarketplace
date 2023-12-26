"use client";
import React, { useState } from "react";

function page() {
  const [principal, setPrincipal] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [time, setTime] = useState<number>(0);

  function calculateCompoundInterest(p: number, r: number, t: number): number {
    // Formula for compound interest: A = P(1 + r/n)^(nt), where n = 1
    const compoundInterest = p * Math.pow(1 + r / 100, t) - p;
    console.log("compoundInterest", compoundInterest);

    return compoundInterest;
  }

  return (
    <div className="min-h-screen bg-[#f2f2f2] flex justify-center">
      <div className="bg-white rounded-md flex flex-col items-center p-4">
        <span>EMI CALCULATOR</span>
        <div className="flex gap-5">
          <label>Loan Amount</label>
          <input
            type="number"
            className="border-2"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
          />
        </div>
        <div className="flex gap-5">
          <label>Annual Interest Rate</label>
          <input
            type="number"
            className="border-2"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
          />
        </div>
        <div className="flex gap-5">
          <label>Term/Period (Year)</label>
          <input
            type="number"
            className="border-2"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
          />
        </div>
        <button
          onClick={() => calculateCompoundInterest(principal, rate, time)}
        >
          Calculate
        </button>
      </div>
    </div>
  );
}

export default page;
