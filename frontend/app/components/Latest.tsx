import Image from "next/image";
import React from "react";

interface Car {
  title: string;
  year: number;
  kilometers: number;
  fuel: string;
  img: string;
}

function Latest() {
  const latestCars: Car[] = [
    {
      title: "2021 BMW 330LI GRAN M SPORT",
      year: 2021,
      kilometers: 22000,
      fuel: "petrol",
      img: "/assets/bmw.jpg",
    },
    {
      title: "2016 Volvo XC90 D5 Momentum",
      year: 2014,
      kilometers: 22000,
      fuel: "petrol",
      img: "/assets/volvo.jpg",
    },
    {
      title: "2011 Mercedes Benz G55 AMG ",
      year: 2014,
      kilometers: 22000,
      fuel: "petrol",
      img: "/assets/gwagon.jpg",
    },
    {
      title: "2013 ROLLS ROYCE PHANTOM SERIES II ",
      year: 2014,
      kilometers: 22000,
      fuel: "petrol",
      img: "/assets/rolls.jpg",
    },
  ];

  return (
    <div className="bg-white h-screen px-28">
      <div className="flex flex-col mt-24">
        <p className="text-2xl font-bold">Latest @</p>
        <p className="text-3xl font-bold">Car Marketplace</p>
      </div>
      <div className="w-full flex gap-5 mt-10">
        {latestCars.map((car: Car, index: number) => (
          <div key={index} className="w-1/4 flex flex-col gap-5">
            <Image
              src={car.img}
              alt="img"
              className="rounded"
              width={360}
              height={245}
            />
            <p className="font-bold text-xl text-center">{car.title}</p>
            <div className="flex flex-row gap-3">
              <p>REG. YEAR- {car.year}</p>
              <p>KMS- {car.kilometers}</p>
              <p>FUEL TYPE- {car.fuel}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Latest;
