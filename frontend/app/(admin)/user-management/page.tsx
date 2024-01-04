"use client";
import delete_icon from "../../../public/assets/delete-icon.svg";
import edit_icon from "../../../public/assets/edit-icon.svg";
import Image from "next/image";
import BlueButton from "../components/BlueButton";
import SearchBar from "../components/SearchBar";
import { useEffect, useRef, useState } from "react";
import BackButton from "../components/BackButton";
import DeleteModal from "../components/DeleteModal";
import { useRecoilState } from "recoil";
import { Brand, User, userState } from "@/app/_utils/atom";
import axios from "axios";

function page() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [users, setUsers] = useRecoilState<User[]>(userState);

  const [loading, setLoading] = useState(false);

  const [modalContent, setModalContent] = useState({
    title: "Delete",
    subtitle: "Are you sure you want to delete this User",
    name: "",
  });
  let loader = false;

  const getAllUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8000/users/get-all-users"
      );
      setUsers(response.data.users);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (users.length === 0) getAllUsers();
  }, []);

  const handleDeleteClick = (item: User) => {
    setModalContent((prev) => ({
      ...prev,
      name: item.firstName + " " + item.lastName,
    }));
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
