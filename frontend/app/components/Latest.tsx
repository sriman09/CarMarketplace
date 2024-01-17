"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { inventoryState } from "../_utils/atom";
import { Inventory } from "../_utils/types";
import { inventoryServices } from "../_utils/apiServices";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

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

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        className="mt-10"
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {inventory
          .map((car: Inventory, index: number) => (
            <Link
              key={index}
              href={{
                pathname: "/collections/car-details",
                query: { carDetails: JSON.stringify(car) }, // the data
              }}
            >
              <div className="flex flex-col gap-5 mx-2">
                <Image
                  src={`https://car-marketplace.s3.ap-south-1.amazonaws.com/${car.images[0]}`}
                  alt="img"
                  className="rounded-3xl"
                  width={480}
                  height={360}
                />
                <p className="font-bold text-lg md:text-2xl">{`${car.year} ${car.brandName} ${car.modelName} ${car.variant}`}</p>
                <div className="flex flex-row gap-3">
                  <p className=" text-[#69686D] font-bold font-poppins">
                    REG.YEAR-
                    <span className="text-black font-bold">{car.year}</span>
                  </p>
                  <p className="">
                    KMS-
                    <span>{car.kilometers}</span>
                  </p>
                  <p className="">
                    FUEL TYPE-
                    <span>{car.fuelType}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))
          .slice(0, 4)}
      </Carousel>
    </div>
  );
}

export default Latest;
