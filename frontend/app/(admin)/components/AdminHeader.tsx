"use client";
import { Userinfo } from "@/app/_utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DeleteModal from "./DeleteModal";

function AdminHeader() {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState({
    title: "Sign Out",
    subtitle: "Are you sure you want to Sign Out.",
    name: " ",
  });
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<Userinfo | null>(null);

  useEffect(() => {
    const userInfoString: string | null = localStorage.getItem("userInfo");
    const parsedUserInfo: Userinfo | null = userInfoString
      ? JSON.parse(userInfoString)
      : null;
    setUserInfo(parsedUserInfo);
  });
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    router.push("/login");
  };
  return (
    <>
      <div className="flex flex-row justify-between px-2 md:px-8 lg:px-20 mt-5 items-center">
        <span className="font-bold text-base md:text-xl lg:text-2xl text-[#8C8C8C]">
          Welcome,{userInfo?.name}
        </span>
        <button
          className="bg-blue-500 text-white rounded-md p-2 whitespace-nowrap"
          onClick={() => setShowDeleteModal(true)}
        >
          Sign out
        </button>
      </div>
      {showDeleteModal && (
        <DeleteModal
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          modalContent={modalContent}
          handleDeleteModalYesClick={handleLogout}
          loader={false}
        />
      )}
    </>
  );
}

export default AdminHeader;
