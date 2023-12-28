"use client";
import delete_icon from "../../../public/assets/delete-icon.svg";
import edit_icon from "../../../public/assets/edit-icon.svg";
import Image from "next/image";
import BlueButton from "../components/BlueButton";
import { useRef, useState } from "react";
import SearchBar from "../components/SearchBar";
import BackButton from "../components/BackButton";
import DeleteModal from "../components/DeleteModal";
let brands = [
  {
    id: 1,
    brandName: "BMW",
    logo: "bmw_logo",
  },
  {
    id: 2,
    brandName: "BMW",
    logo: "bmw_logo",
  },
  {
    id: 3,
    brandName: "BMW",
    logo: "bmw_logo",
  },
  {
    id: 4,
    brandName: "BMW",
    logo: "bmw_logo",
  },
  {
    id: 5,
    brandName: "BMW",
    logo: "bmw_logo",
  },
];

function page() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  let modalContent = {
    title: "Delete Enquiry",
    subtitle: "Are you sure you want to delete this enquiry",
    name: "Sriman",
  };
  let loader = false;
  const handleDeleteModalYesClick = () => {
    console.log("Delete Modal Clicked!");
  };
  return (
    <>
      <BackButton back={false} />
      <div className="flex flex-col mt-10">
        <div className="flex flex-row justify-between">
          <SearchBar placeholder="Search Brands" inputRef={inputRef} />
          <BlueButton>Create Brand</BlueButton>
        </div>
        <div className="overflow-x-scroll bg-white mt-5">
          <table className="w-full border-collapse border border-gray-300  text-xs md:text-sm lg:text-base">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-2 px-4">Brand Name</th>
                <th className="py-2 px-4">Logo</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 border-2 text-center"
                >
                  <td className="py-2 px-4">{item.brandName}</td>
                  <td className="py-2 px-4">{item.logo}</td>
                  <td className="py-2 px-4 flex gap-3 justify-center">
                    <button>
                      <Image
                        src={edit_icon}
                        alt="edit"
                        height={20}
                        width={20}
                      />
                    </button>
                    <button onClick={() => setShowDeleteModal(true)}>
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
        <DeleteModal
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          modalContent={modalContent}
          handleDeleteModalYesClick={handleDeleteModalYesClick}
          loader={loader}
        />
      </div>
    </>
  );
}

export default page;
