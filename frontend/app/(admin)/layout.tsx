"use client";
import Image from "next/image";
import cover from "../../public/assets/auth_cover.png";
import Link from "next/link";
import { useState } from "react";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  return (
    <div className="w-full flex flex-row h-screen">
      <div className="w-1/4 bg-white hidden md:flex flex-col p-2 font-bold text-xl text-[#8C8C8C] shadow-2xl pt-20 gap-5 px-20">
        <Link href={"/dashboard"} id="dashboard">
          Dashboard
        </Link>
        <Link href={"/inventory"} id="inventory">
          Inventory
        </Link>
        <Link href={"/enquiry"} id="enquiry">
          Sell Enquiry
        </Link>
        <Link href={"/user-management"} id="users">
          Users
        </Link>
        <Link href={"/brands"} id="brands">
          Brands
        </Link>
        <Link href={"/models"} id="mmodels">
          Models
        </Link>
        <Link href={"/profile"} id="profile">
          Profile
        </Link>
      </div>
      <div className="w-full md:w-3/4 flex flex-col bg-[#EFF6FF]">
        <div className="flex flex-row justify-between px-8 md:px-20 mt-5 items-center">
          <span className="font-bold text-2xl text-[#8C8C8C]">
            Welcome, Srimanvit Pattanaik
          </span>
          <button className="bg-blue-500 text-white rounded-md p-2 whitespace-nowrap">
            Sign out
          </button>
        </div>
        <div className="px-10 md:px-20 mt-5">{children}</div>
      </div>
    </div>
  );
}
