"use client";
import { detailedCarState } from "@/app/_utils/atom";
import { Inventory } from "@/app/_utils/types";
import Carousel from "react-multi-carousel";
import { useRecoilState } from "recoil";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Latest from "@/app/components/Latest";

import type_img from "@/public/assets/summary/car-type.svg";
import year_img from "@/public/assets/summary/car-year.svg";
import ownership_img from "@/public/assets/summary/car-owner.svg";
import seating_img from "@/public/assets/summary/car-seat.svg";
import kms_img from "@/public/assets/summary/car-mileage.svg";
import color_img from "@/public/assets/summary/car-color.svg";
import fuel_img from "@/public/assets/summary/car-fuel.svg";
import { useMediaQuery } from "react-responsive";

const CarDetail = () => {
  const searchParams = useSearchParams();
  const carDetails = JSON.parse(searchParams.get("carDetails") || "");
  const showCarosuel = useMediaQuery({ query: "(min-width: 768px)" });

  let summary = [
    {
      img: type_img,
      property: "Vehicle Type",
      value: carDetails.vehicleType,
    },
    {
      img: year_img,
      property: "Registration Year",
      value: carDetails.year,
    },
    {
      img: ownership_img,
      property: "Ownership",
      value: carDetails.ownership,
    },
    {
      img: seating_img,
      property: "Seating Capacity",
      value: carDetails.seatingCapacity,
    },
    {
      img: fuel_img,
      property: "Fuel",
      value: carDetails.fuelType,
    },
    {
      img: kms_img,
      property: "Kms Done",
      value: carDetails.kilometers,
    },
    {
      img: color_img,
      property: "Color",
      value: carDetails.color,
    },
  ];

  return (
    <>
      <div className="flex flex-row justify-between bg-gray-100 px-10 md:px-28 py-5 sticky top-0 z-[10000]">
        <div className="flex flex-col md:flex-row gap-8 w-full md:w-7/12">
          <div className="flex flex-col gap-4 w-8/12">
            <p className="text-lg md:text-2xl font-bold">{`${carDetails.year} ${carDetails.brandName} ${carDetails.modelName} ${carDetails.variant}`}</p>
            <p className="text-lg font-semibold">
              {"₹" + carDetails.price.toLocaleString("en-IN")}
            </p>
          </div>
          {/* <div className="hidden md:flex flex-col w-4/12">
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
          </div> */}
        </div>
        <div>
          <button className="bg-black text-white hover:bg-white hover:text-black border border-black rounded-lg px-4 py-2 mt-5 text-base md:text-xl">
            Reserve this Car
          </button>
        </div>
      </div>
      {/* Carousel */}
      {showCarosuel ? (
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode
          className=""
          containerClass="w-full"
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
              items: 2,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 20,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
              partialVisibilityGutter: 30,
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
          {carDetails.images.map((item: Inventory, index: number) => (
            <div key={index}>
              <img
                src={`https://car-marketplace.s3.ap-south-1.amazonaws.com/${item}`}
                alt="photo"
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="flex flex-col w-full">
          {carDetails.images.map((item: Inventory, index: number) => (
            <div key={index}>
              <img
                src={`https://car-marketplace.s3.ap-south-1.amazonaws.com/${item}`}
                alt="photo"
              />
            </div>
          ))}
        </div>
      )}

      {/* Summary */}
      <div className="flex flex-col justify-center items-center py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {summary.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border-2 border-black rounded-xl justify-center items-center p-2"
            >
              <Image src={item.img} alt="property" height={50} width={50} />
              <span className=" text-lg">{item.property}</span>
              <span className="font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      <Latest />
    </>
  );
};
export default CarDetail;
