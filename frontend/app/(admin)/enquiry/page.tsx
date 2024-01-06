"use client";
import React, { useEffect, useRef, useState } from "react";
import BackButton from "../components/BackButton";
import SearchBar from "../components/SearchBar";
import Image from "next/image";
import delete_icon from "../../../public/assets/delete-icon.svg";
import edit_icon from "../../../public/assets/edit-icon.svg";
import DeleteModal from "../components/DeleteModal";
import { useRecoilState } from "recoil";
import { Enquiry, enquiryState } from "@/app/_utils/atom";
import axios from "axios";
import { enquiryServices } from "@/app/_utils/apiServices";
function Page() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [sellinquiry, setSellInquiry] = useRecoilState<Enquiry[]>(enquiryState);

  const [loading, setLoading] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState({
    title: "Delete",
    subtitle: "Are you sure you want to delete this enquiry",
    name: "",
  });

  let loader = false;

  const getAllEnquiry = async () => {
    const response = await enquiryServices.getEnquiry();
    setSellInquiry(response.enquiries);
  };

  useEffect(() => {
    if (sellinquiry.length === 0) getAllEnquiry();
  }, []);

  const handleDeleteClick = (name: string) => {
    setModalContent((prev) => ({ ...prev, name: name }));
    setShowDeleteModal(true);
  };
  const handleDeleteModalYesClick = () => {
    console.log("Delete Modal Clicked!");
  };
  return (
    <>
      <BackButton back={false} />
      <div className="flex flex-col mt-5 md:mt-10">
        <div className="flex flex-row justify-between">
          <SearchBar placeholder="Search Enquiry" inputRef={inputRef} />
        </div>
        <div className="overflow-x-scroll bg-white mt-5">
          <table className="w-full border-collapse border border-gray-300  text-xs md:text-sm lg:text-base">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Phone</th>
                <th className="py-2 px-4">Brand</th>
                <th className="py-2 px-4">Model</th>
                <th className="py-2 px-4">Year</th>
                <th className="py-2 px-4">Images</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {sellinquiry.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 border-2 text-center"
                >
                  <td className="py-2 px-4">{item.name}</td>
                  <td className="py-2 px-4">{item.email}</td>
                  <td className="py-2 px-4">{item.phone}</td>
                  <td className="py-2 px-4">{item.brand}</td>
                  <td className="py-2 px-4">{item.model}</td>
                  <td className="py-2 px-4">{item.year}</td>
                  <td className="py-2 px-4 text-blue-500 hover:underline cursor-pointer text-sm">
                    View Photo
                  </td>
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
                        onClick={() => handleDeleteClick(item.name)}
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

export default Page;
