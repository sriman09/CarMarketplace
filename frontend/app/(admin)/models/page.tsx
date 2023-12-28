"use client";
import delete_icon from "../../../public/assets/delete-icon.svg";
import edit_icon from "../../../public/assets/edit-icon.svg";
import Image from "next/image";
import BlueButton from "../components/BlueButton";
import { useRef } from "react";
import SearchBar from "../components/SearchBar";
import BackButton from "../components/BackButton";
let models = [
  {
    id: 1,
    brandName: "BMW",
    modelName: "X7",
  },
  {
    id: 2,
    brandName: "BMW",
    modelName: "X7",
  },
  {
    id: 3,
    brandName: "BMW",
    modelName: "X7",
  },
  {
    id: 4,
    brandName: "BMW",
    modelName: "X7",
  },
  {
    id: 5,
    brandName: "BMW",
    modelName: "X7",
  },
];
function page() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <>
      <BackButton back={false} />
      <div className="flex flex-col mt-10">
        <div className="flex flex-row justify-between">
          <SearchBar placeholder="Search Models" inputRef={inputRef} />
          <BlueButton>Create Model</BlueButton>
        </div>
        <div className="overflow-x-scroll bg-white mt-5">
          <table className="w-full border-collapse border border-gray-300  text-xs md:text-sm lg:text-base">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-2 px-4">Model Name</th>
                <th className="py-2 px-4">Brand</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {models.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 border-2 text-center"
                >
                  <td className="py-2 px-4">{item.modelName}</td>
                  <td className="py-2 px-4">{item.brandName}</td>
                  <td className="py-2 px-4 flex gap-3 justify-center">
                    <button>
                      <Image
                        src={edit_icon}
                        alt="edit"
                        height={20}
                        width={20}
                      />
                    </button>
                    <button>
                      <Image
                        src={delete_icon}
                        alt="edit"
                        height={20}
                        width={20}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default page;
