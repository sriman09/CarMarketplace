"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RecoilRoot } from "recoil";
import { Userinfo } from "../_utils/types";
import DeleteModal from "./components/DeleteModal";
import { adminRoutes } from "./sidebarData";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState({
    title: "Sign Out",
    subtitle: "Are you sure you want to Sign Out.",
    name: " ",
  });
  const router = useRouter();
  const userInfoString: string | null = localStorage.getItem("userInfo");
  const userInfo: Userinfo | null = userInfoString
    ? JSON.parse(userInfoString)
    : null;

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    router.push("/login");
  };

  const handleSideButtonClick = (item: any) => {
    router.push(item.route);
    setActiveTab(item.id);
  };
  return (
    <RecoilRoot>
      <div className="w-full flex flex-row h-screen" id="admin">
        <div className="w-1/4 bg-white hidden md:flex flex-col p-2 font-bold text-xl text-indigo-500 shadow-2xl pt-20">
          {adminRoutes.map((item) => (
            <button
              onClick={() => handleSideButtonClick(item)}
              key={item.id}
              id={item.id}
              className={`flex items-center gap-3 w-full px-10 lg:px-20 py-5 ${
                activeTab === item.id
                  ? "bg-slate-200 border-r-4 border-indigo-500"
                  : "text-[#8C8C8C] grayscale"
              }`}
            >
              <Image src={item.logo} alt={item.id} height={25} width={25} />
              {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
            </button>
          ))}
        </div>
        <div className="w-full md:w-3/4 flex flex-col bg-[#EFF6FF] overflow-y-scroll">
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
          <div className="px-2 md:px-8 lg:px-20">{children}</div>
          {showDeleteModal && (
            <DeleteModal
              showDeleteModal={showDeleteModal}
              setShowDeleteModal={setShowDeleteModal}
              modalContent={modalContent}
              handleDeleteModalYesClick={handleLogout}
              loader={false}
            />
          )}
        </div>
      </div>
    </RecoilRoot>
  );
}
