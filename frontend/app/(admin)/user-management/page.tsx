"use client";
import delete_icon from "../../../public/assets/delete-icon.svg";
import edit_icon from "../../../public/assets/edit-icon.svg";
import Image from "next/image";
import BlueButton from "../components/BlueButton";
import SearchBar from "../components/SearchBar";
import { useEffect, useRef, useState } from "react";
import BackButton from "../components/BackButton";
import DeleteModal from "../components/DeleteModal";
import { useRecoilState, useRecoilStateLoadable } from "recoil";
import { userState } from "@/app/_utils/atom";
import CreateModal from "../components/CreateModal";
import EditModal from "../components/EditModal";
import { User } from "@/app/_utils/types";
import { userServices } from "@/app/_utils/apiServices";
import { toast } from "react-toastify";

function UsersPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const [users, setUsers] = useRecoilStateLoadable<User[]>(userState);
  const [editData, setEditData] = useState<any>({});

  const [modalContent, setModalContent] = useState({
    title: "Delete",
    subtitle: "Are you sure you want to delete this User",
    name: "",
    deleteId: "",
  });
  let loader = false;

  const handleDeleteClick = (item: User) => {
    setModalContent((prev) => ({
      ...prev,
      name: item.firstName + " " + item.lastName,
      deleteId: item._id,
    }));
    setShowDeleteModal(true);
  };

  const handleEditClick = (item: User) => {
    setEditData(item);
    setShowEditModal(true);
  };

  const handleDeleteModalYesClick = () => {
    userServices.deleteUser(modalContent.deleteId).then(() => {
      setShowDeleteModal(false);
    });
  };

  const handleCreateModalYesClick = () => {
    console.log("Created...");
  };

  const handleSearch = async () => {
    if (inputRef.current?.value && inputRef.current?.value.length > 0) {
      const response = await userServices.searchUsers({
        searchQuery: inputRef.current?.value,
      });
      setUsers(response.users);
    } else {
      toast.error("Please enter something.");
    }
  };

  if (users.state === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <BackButton back={false} />
      <div className="flex flex-col mt-5 md:mt-10">
        <div className="flex flex-row justify-between">
          <SearchBar
            placeholder="Search User"
            inputRef={inputRef}
            handleSearch={handleSearch}
          />
          <BlueButton onClick={() => setShowCreateModal(true)}>
            Create User
          </BlueButton>
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
              {users.contents.map((item: User, index: number) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 border-2 text-center"
                >
                  <td className="py-2 px-4">{item.firstName}</td>
                  <td className="py-2 px-4">{item.lastName}</td>
                  <td className="py-2 px-4">{item.email}</td>
                  <td className="py-2 px-4">{item.type}</td>
                  <td className="py-2 px-4 flex gap-3 justify-center">
                    <button onClick={() => handleEditClick(item)}>
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
        {showCreateModal && (
          <CreateModal
            showModal={showCreateModal}
            setShowModal={setShowCreateModal}
            modalFor="user"
            handleModalYesClick={handleCreateModalYesClick}
            loader={loader}
          />
        )}

        {showEditModal && (
          <EditModal
            showModal={showEditModal}
            setShowModal={setShowEditModal}
            modalFor="user"
            loader={loader}
            editData={editData}
          />
        )}
      </div>
    </>
  );
}

export default UsersPage;
