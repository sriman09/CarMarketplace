"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RecoilRoot } from "recoil";
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
          <AdminHeader />
          <div className="px-2 md:px-8 lg:px-20">{children}</div>
        </div>
      </div>
    </RecoilRoot>
  );
}
