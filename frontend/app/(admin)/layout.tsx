"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { adminRoutes } from "./sidebarData";
import AdminHeader from "./components/AdminHeader";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const router = useRouter();
  const handleSideButtonClick = (item: any) => {
    router.push(item.route);
    setActiveTab(item.id);
  };
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      router.push("/login");
    }
  }, []);
  return (
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
        <AdminHeader />
        <div className="px-2 pb-20 md:pb-0 md:px-8 lg:px-20">{children}</div>
      </div>
      {/* Mobile Bottom Bar */}
      <div className="md:hidden bg-white fixed bottom-0 left-0 w-full flex justify-around pb-2 border-t shadow-2xl">
        {adminRoutes.map((item) => (
          <button
            onClick={() => handleSideButtonClick(item)}
            key={item.id}
            id={item.id}
            className={`flex gap-3 px-4 py-2 ${
              activeTab === item.id
                ? " border-t-2 border-indigo-500"
                : "text-[#8C8C8C] grayscale"
            }`}
          >
            <Image src={item.logo} alt={item.id} height={20} width={20} />
            {/* <span className="text-xs">
              {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
            </span> */}
          </button>
        ))}
      </div>
    </div>
  );
}
