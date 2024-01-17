"use client";
import React from "react";
import step1 from "../../public/assets/howitworks-img1.png";
import step2 from "../../public/assets/howitworks-img2.png";
import step3 from "../../public/assets/howitworks-img3.png";
import step4 from "../../public/assets/howitworks-img4.png";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { useMediaQuery } from "react-responsive";

function HowItWork() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
  let slides = [
    {
      id: 1,
      img: step1,
      text: "BROWSE FROM YOUR COLLECTION",
    },
    {
      id: 2,
      img: step2,
      text: "GET TO KNOW YOUR RIDE",
    },
    {
      id: 3,
      img: step3,
      text: "PAY & BOOK ONLINE OR VISIT SHOWROOM",
    },
    {
      id: 4,
      img: step4,
      text: "INSTANT PAYMENT & TRANSFER",
    },
  ];
  return (
    <div className="bg-black min-h-[90vh] px-10 md:px-28 ">
      <div className="flex flex-col mt-24 justify-center items-center gap-8">
        <p className="text-gray-300 text-4xl font-bold">HOW IT WORKS</p>
        <p className="text-gray-400">
          Buying used luxury cars in India was never this easy. You can now own
          your dream luxury car in just 4 simple steps at Big Boy Toyz,
          India&apos;s trusted used car portal.
        </p>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          className="mt-10 mb-10"
          containerClass="container"
          dotListClass="mt-5 bg-black"
          focusOnSelect={false}
          infinite
          draggable={isDesktop ? false : true}
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
              items: 4,
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
          showDots={isDesktop ? false : true}
          sliderClass=""
          slidesToSlide={1}
          swipeable={isDesktop ? false : true}
          ssr
        >
          {slides.map((slide) => (
            <div key={slide.id} className=" flex flex-col items-center gap-4">
              <Image src={slide.img} alt="step1" />
              <p className="text-gray-400 text-center mb-5">{slide.text}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default HowItWork;
