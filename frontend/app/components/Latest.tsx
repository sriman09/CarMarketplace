"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { inventoryState } from "../_utils/atom";
import { Inventory } from "../_utils/types";
import { inventoryServices } from "../_utils/apiServices";

function Latest() {
  const [inventory, setInventory] = useRecoilState<Inventory[]>(inventoryState);
  const getAllInventory = async () => {
    const response = await inventoryServices.getInventoryForAdmin();
    setInventory(response.data);
  };

  useEffect(() => {
    if (inventory.length === 0) getAllInventory();
  }, []);
  return (
    <div className="bg-white min-h-screen px-10 md:px-28">
      <div className="flex flex-col mt-24">
        <p className="text-2xl font-bold">Latest @</p>
        <p className="text-3xl font-bold">Car Marketplace</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {inventory
          .map((car: Inventory, index: number) => (
            <div key={index} className="flex flex-col gap-5">
              <img
                src={`https://car-marketplace.s3.ap-south-1.amazonaws.com/${car.images[0]}`}
                alt="img"
                className="rounded"
                width={360}
                height={245}
              />
              <p className="font-bold text-xl text-center">{`${car.year} ${car.brandName} ${car.modelName} ${car.variant}`}</p>
              <div className="flex flex-row gap-3">
                <p>REG. YEAR- {car.year}</p>
                <p>KMS- {car.kilometers}</p>
                <p>FUEL TYPE- {car.fuelType}</p>
              </div>
            </div>
          ))
          .slice(0, 4)}
      </div>
    </div>
  );
}

export default Latest;
