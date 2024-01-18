"use client";
import Image from "next/image";
import Link from "next/link";
import filter_img from "../../../public/assets/filter.svg";
import { useRecoilState, useRecoilStateLoadable } from "recoil";
import { Inventory } from "@/app/_utils/types";
import { detailedCarState, inventoryState } from "@/app/_utils/atom";
import { inventoryServices } from "@/app/_utils/apiServices";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Collections() {
  const [inventory, setInventory] =
    useRecoilStateLoadable<Inventory[]>(inventoryState);
  const [carDetails, setCarDetails] =
    useRecoilState<Inventory>(detailedCarState);
  const router = useRouter();

  if (inventory.state === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="flex flex-col px-5 sm:px-10 md:px-28 gap-10">
        {/* Navigation */}
        <div className="flex flex-row gap-5 items-center mt-6">
          <Link href={"/"} className="text-sm">
            HOME
          </Link>
          <span className="text-xs md:text-sm">{">"}</span>
          <span className="text-xs md:text-sm text-red-500">COLLECTION</span>
        </div>
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b-2 pb-5 mb-5">
          <span className="text-base md:text-xl font-bold">
            TOTAL 1589 RESULTS FOUND
          </span>
          <div className="flex flex-row gap-5">
            <div className="flex items-center gap-2">
              <span className="text-xs md:text-base">Filters: </span>
              <button className="border border-gray-400 rounded-2xl px-4 bg-slate-950">
                <Image src={filter_img} alt="filter" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs md:text-base">Sort By: </span>
              <select className="p-2 border-2 rounded-md text-xs md:text-base">
                <option>Price</option>
                <option>Price- High to Low</option>
                <option>Price- Low to High</option>
              </select>
            </div>
          </div>
        </div>
        {/* Car Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {inventory.contents.map((car: Inventory, index: number) => (
            <Link
              key={index}
              href={{
                pathname: "/collections/car-details",
                query: { carDetails: JSON.stringify(car) }, // the data
              }}
            >
              <div className="flex flex-col gap-5 bg-gray-100 rounded-2xl shadow-xl mb-5 cursor-pointer">
                <img
                  src={`https://car-marketplace.s3.ap-south-1.amazonaws.com/${car.images[0]}`}
                  alt="img"
                  className="w-full rounded-xl"
                />
                <p className="font-bold text-xl text-center">{`${car.year} ${car.brandName} ${car.modelName} ${car.variant}`}</p>
                <div className="flex flex-row gap-3 p-3 mt-3">
                  <p>Price- {"₹" + car.price.toLocaleString("en-IN")}</p>
                  <p>KMS- {car.kilometers.toLocaleString("en-IN")}</p>
                  <p>FUEL TYPE- {car.fuelType}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Collections;
