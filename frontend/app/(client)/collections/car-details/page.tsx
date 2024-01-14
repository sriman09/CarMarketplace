"use client";
import { detailedCarState } from "@/app/_utils/atom";
import { Inventory } from "@/app/_utils/types";
import { useRecoilState } from "recoil";

const CarDetail = () => {
  const [carDetails, setCarDetails] =
    useRecoilState<Inventory>(detailedCarState);

  console.log("car", carDetails);

  return (
    <>
      <div className="flex flex-row justify-between bg-gray-100 px-10 md:px-28 py-5">
        <div className="flex gap-8 w-7/12">
          <div className="flex flex-col gap-4 w-8/12">
            <p className="text-2xl font-bold">{`${carDetails.year} ${carDetails.brandName} ${carDetails.modelName} ${carDetails.variant}`}</p>
            <p>{"₹" + carDetails.price.toLocaleString("en-IN")}</p>
          </div>
          <div className="flex flex-col w-4/12">
            <div className="flex flex-row">
              <p className="w-1/2">REG. YEAR </p>
              <p className="w-1/2">: 2023</p>
            </div>
            <div className="flex flex-row">
              <p className="w-1/2">REG. YEAR </p>
              <p className="w-1/2">: 2023</p>
            </div>
            <div className="flex flex-row">
              <p className="w-1/2">REG. YEAR </p>
              <p className="w-1/2">: 2023</p>
            </div>
            <div className="flex flex-row">
              <p className="w-1/2">REG. YEAR </p>
              <p className="w-1/2">: 2023</p>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-black text-white hover:bg-white hover:text-black border border-black rounded-lg px-4 py-2 mt-5 text-xl">
            Reserve this Car
          </button>
        </div>
      </div>
    </>
  );
};
export default CarDetail;
