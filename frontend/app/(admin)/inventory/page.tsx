"use client";
import React, { useEffect, useRef, useState } from "react";
import BackButton from "../components/BackButton";
import SearchBar from "../components/SearchBar";
import BlueButton from "../components/BlueButton";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { inventoryState } from "@/app/_utils/atom";
import { useRouter } from "next/navigation";
import { Inventory } from "@/app/_utils/types";
import { inventoryServices } from "@/app/_utils/apiServices";
import { toast } from "react-toastify";

function InventoryPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inventory, setInventory] = useRecoilState<Inventory[]>(inventoryState);
  const router = useRouter();

  const getAllInventory = async () => {
    const response = await inventoryServices.getInventoryForAdmin();
    setInventory(response.data);
  };

  useEffect(() => {
    getAllInventory();
  }, []);

  const handleSearch = async () => {
    if (inputRef.current?.value && inputRef.current?.value.length > 0) {
      const response = await inventoryServices.searchCars({
        searchQuery: inputRef.current?.value,
      });
      setInventory(response.data);
    } else {
      toast.error("Please enter something.");
    }
  };

  return (
    <>
      <BackButton back={false} />
      <div className="flex flex-col mt-5 md:mt-10">
        <div className="flex flex-row justify-between">
          <SearchBar
            placeholder="Search Inventory"
            inputRef={inputRef}
            handleSearch={handleSearch}
          />
          <BlueButton
            onClick={() => router.push("/inventory/create-inventory")}
          >
            Create
          </BlueButton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {inventory.map((item, index) => (
            <button
              className="flex flex-row bg-white rounded-md shadow-lg gap-3"
              key={index}
            >
              <img
                src={`https://car-marketplace.s3.ap-south-1.amazonaws.com/${item.images[0]}`}
                alt="car_image"
                className="w-44 h-32object-fill"
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

export default InventoryPage;
