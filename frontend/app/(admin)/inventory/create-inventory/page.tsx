"use client";
import React from "react";
import BackButton from "../../components/BackButton";
import BlueButton from "../../components/BlueButton";

function page() {
  return (
    <>
      <BackButton back={true} />
      <div className="bg-white px-5 pt-5 pb-10 mt-5 rounded-xl shadow-xl flex flex-col">
        <span className="text-2xl font-bold text-gray-900 text-center">
          Create Inventory
        </span>
        <form className="flex flex-col gap-2 py-5">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {/* First Row */}
            <div className="flex flex-col gap-1">
              <label>Brand</label>
              <select className="border-2 border-gray-600 px-2 py-1">
                <option>Select</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Model</label>
              <select className="border-2 border-gray-600 px-2 py-1">
                <option>Select</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Variant</label>
              <input
                type="text"
                placeholder="Variant"
                className="border-2 border-gray-600 px-2 py-1"
              />
            </div>

            {/* Second Row */}
            <div className="flex flex-col gap-1">
              <label>Year</label>
              <input
                type="text"
                placeholder="Year"
                className="border-2 border-gray-600 px-2 py-1"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Fuel</label>
              <select className="border-2 border-gray-600 px-2 py-1">
                <option>Select</option>
                <option>Petrol</option>
                <option>Diesel</option>
                <option>EV</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Vehicle Type</label>
              <select className="border-2 border-gray-600 px-2 py-1">
                <option>Select</option>
                <option>Sedan</option>
                <option>Hatchback</option>
                <option>SUV</option>
                <option>MUV</option>
              </select>
            </div>

            {/* Third Row */}
            <div className="flex flex-col gap-1">
              <label>Kilometers</label>
              <input
                type="number"
                placeholder="Kilometers"
                className="border-2 border-gray-600 px-2 py-1"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Ownership</label>
              <select className="border-2 border-gray-600 px-2 py-1">
                <option>Select</option>
                <option>1st</option>
                <option>2nd</option>
                <option>3rd</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Seating Capacity</label>
              <input
                type="number"
                placeholder="Seating Capacity"
                className="border-2 border-gray-600 px-2 py-1"
              />
            </div>

            {/* Fourth Row */}
            <div className="flex flex-col gap-1">
              <label>Color</label>
              <input
                type="text"
                placeholder="Color"
                className="border-2 border-gray-600 px-2 py-1"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Price</label>
              <input
                type="number"
                placeholder="Price"
                className="border-2 border-gray-600 px-2 py-1"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Images</label>
              <input type="file" className=" px-2 py-1" />
            </div>
          </div>
          <div className="grid place-items-center mt-8">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-xl text-white w-1/3 rounded py-2">
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default page;
