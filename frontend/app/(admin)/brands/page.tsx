"use client";
import delete_icon from "../../../public/assets/delete-icon.svg";
import edit_icon from "../../../public/assets/edit-icon.svg";
import Image from "next/image";
import BlueButton from "../components/BlueButton";
import { useEffect, useRef, useState } from "react";
import SearchBar from "../components/SearchBar";
import BackButton from "../components/BackButton";
import DeleteModal from "../components/DeleteModal";
import { useRecoilState } from "recoil";
import { brandState, Brand } from "@/app/_utils/atom";
import axios from "axios";

function page() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [brands, setBrands] = useRecoilState<Brand[]>(brandState);

  const [loading, setLoading] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState({
    title: "Delete",
    subtitle: "Are you sure you want to delete this brand",
    name: "",
  });

  const getBrands = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8000/brands/get-brands"
      );
      setBrands(response.data.brands);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching brands:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (brands.length === 0) getBrands();
  }, []);

  let loader = false;

  const handleDeleteClick = (item: Brand) => {
    setModalContent((prev) => ({ ...prev, name: item.brandName }));
    setShowDeleteModal(true);
  };

  const handleDeleteModalYesClick = () => {
    console.log("Delete Modal Clicked!");
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

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
                  <td className="py-2 px-4 text-center">
                    <img
                      src={item.logo}
                      alt="logo"
                      width={50}
                      height={40}
                      style={{ display: "block", margin: "auto" }}
                    />
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
                    <button onClick={() => handleDeleteClick(item)}>
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
