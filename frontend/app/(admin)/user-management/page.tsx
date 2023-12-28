"use client";
import delete_icon from "../../../public/assets/delete-icon.svg";
import edit_icon from "../../../public/assets/edit-icon.svg";
import Image from "next/image";
import BlueButton from "../components/BlueButton";
import SearchBar from "../components/SearchBar";
import { useRef } from "react";
import BackButton from "../components/BackButton";
let users = [
  {
    firstName: "Sriman",
    lastName: "Pattanaik",
    email: "sriman2@gmail.com",
    type: "admin",
  },
  {
    firstName: "Sriman",
    lastName: "Pattanaik",
    email: "sriman2@gmail.com",
    type: "admin",
  },
  {
    firstName: "Sriman",
    lastName: "Pattanaik",
    email: "sriman2@gmail.com",
    type: "admin",
  },
  {
    firstName: "Sriman",
    lastName: "Pattanaik",
    email: "sriman2@gmail.com",
    type: "admin",
  },
  {
    firstName: "Sriman",
    lastName: "Pattanaik",
    email: "sriman2@gmail.com",
    type: "admin",
  },
];
function page() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <>
      <BackButton back={false} />
      <div className="flex flex-col mt-5 md:mt-10">
        <div className="flex flex-row justify-between">
          <SearchBar placeholder="Search User" inputRef={inputRef} />
          <BlueButton>Create User</BlueButton>
        </div>
        <div className="overflow-x-scroll bg-white mt-5">
          <table className="w-full border-collapse border border-gray-300  text-xs md:text-sm lg:text-base">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-2 px-4">First Name</th>
                <th className="py-2 px-4">Last Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Type</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 border-2 text-center"
                >
                  <td className="py-2 px-4">{item.firstName}</td>
                  <td className="py-2 px-4">{item.lastName}</td>
                  <td className="py-2 px-4">{item.email}</td>
                  <td className="py-2 px-4">{item.type}</td>
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
