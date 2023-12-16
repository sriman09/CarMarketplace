import React from "react";
import hero_img from "../../public/assets/hero.jpg";
function Hero() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url('/assets/hero.jpg')` }}
      >
        <div className="w-full md:w-6/12 flex flex-col gap-5 pl-24 items-center justify-center">
          <span className="text-white text-[60px] font-bold">
            LET'S KEEP IT SIMPLE.
          </span>
        </div>
      </div>
    </>
  );
}

export default Hero;
