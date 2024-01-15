"use client";
import { detailedCarState } from "@/app/_utils/atom";
import { Inventory } from "@/app/_utils/types";
import Carousel from "react-multi-carousel";
import { useRecoilState } from "recoil";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
const CarDetail = () => {
  const [carDetails, setCarDetails] =
    useRecoilState<Inventory>(detailedCarState);

  console.log("car", carDetails);

  return (
    <>
      <div className="flex flex-row justify-between bg-gray-100 px-10 md:px-28 py-5 sticky top-0 z-[10000]">
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
      {/* Carousel */}
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
        {carDetails.images.map((item, index) => (
          <div>
            <img
              key={index}
              src={`https://car-marketplace.s3.ap-south-1.amazonaws.com/${item}`}
              alt="photo"
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};
export default CarDetail;
