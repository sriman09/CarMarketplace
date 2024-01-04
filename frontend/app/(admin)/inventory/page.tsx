"use client";
import React, { useEffect, useRef } from "react";
import BackButton from "../components/BackButton";
import SearchBar from "../components/SearchBar";
import BlueButton from "../components/BlueButton";
import bwm_img from "../../../public/assets/bmw.jpg";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { Inventory, inventoryState } from "@/app/_utils/atom";
import axios from "axios";

function Page() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inventory, setInventory] = useRecoilState<Inventory[]>(inventoryState);

  const getAllInventory = async () => {
    const response = await axios.get("http://localhost:8000/cars/get-all-cars");
    setInventory(response.data.data);
  };

  useEffect(() => {
    if (inventory.length === 0) {
      getAllInventory();
    }
  }, []);
  return (
    <>
      <BackButton back={false} />
      <div className="flex flex-col mt-5 md:mt-10">
        <div className="flex flex-row justify-between">
          <SearchBar placeholder="Search Inventory" inputRef={inputRef} />
          <BlueButton>Create</BlueButton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {inventory.map((item) => (
            <button className="flex flex-row bg-white rounded-md shadow-lg gap-3">
              <Image
                src={bwm_img}
                alt="car_image"
                className="h-32 w-44 object-fill"
              />
              <div className="flex flex-col gap-1 items-start">
                <span className="font-bold">
                  {item.brandName} {item.modelName}
                </span>
                <span className="text-sm text-[#8C8C8C]">
                  {item.kilometers} kms | {item.fuelType} | {item.year}
                </span>
                <span className="font-bold pt-4">Rs. {item.price}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Page;
