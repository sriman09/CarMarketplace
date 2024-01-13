import React from "react";
import step1 from "../../public/assets/howitworks-img1.png";
import step2 from "../../public/assets/howitworks-img2.png";
import step3 from "../../public/assets/howitworks-img3.png";
import step4 from "../../public/assets/howitworks-img4.png";
import Image from "next/image";

function HowItWork() {
  return (
    <div className="bg-black h-[90vh] px-10 md:px-28">
      <div className="flex flex-col mt-24 justify-center items-center gap-8">
        <p className="text-gray-300 text-4xl font-bold">HOW IT WORKS</p>
        <p className="text-gray-400">
          Buying used luxury cars in India was never this easy. You can now own
          your dream luxury car in just 4 simple steps at Big Boy Toyz,
          India&apos;s trusted used car portal.
        </p>
        <div className="w-full flex gap-5 mt-5">
          <div className="w-1/4 flex flex-col items-center gap-4">
            <Image src={step1} alt="step1" />
            <p className="text-gray-400 text-center ">
              BROWSE FROM YOUR COLLECTION
            </p>
          </div>
          <div className="w-1/4 flex flex-col items-center  gap-4">
            <Image src={step2} alt="step1" />
            <p className="text-gray-400 text-center">GET TO KNOW YOUR RIDE</p>
          </div>
          <div className="w-1/4 flex flex-col items-center  gap-4">
            <Image src={step3} alt="step1" />
            <p className="text-gray-400 text-center">
              PAY & BOOK ONLINE OR VISIT SHOWROOM
            </p>
          </div>
          <div className="w-1/4 flex flex-col items-center  gap-4">
            <Image src={step4} alt="step1" />
            <p className="text-gray-400 text-center">
              INSTANT PAYMENT & TRANSFER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWork;
