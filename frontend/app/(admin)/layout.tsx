"use client";
import Image from "next/image";
import cover from "../../public/assets/auth_cover.png";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

let adminRoutes = [
  {
    id: "dashboard",
    route: "/dashboard",
  },
  {
    id: "enquiry",
    route: "/enquiry",
  },
  {
    id: "inventory",
    route: "/inventory",
  },
  {
    id: "user",
    route: "/user-management",
  },
  {
    id: "brands",
    route: "/brands",
  },
  {
    id: "models",
    route: "/models",
  },
  {
    id: "profile",
    route: "/profile",
  },
];
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    router.push("/login");
  };
  return (
    <div className="w-full flex flex-row h-screen">
      <div className="w-1/4 bg-white hidden md:flex flex-col p-2 font-bold text-xl text-[#8C8C8C] shadow-2xl pt-20 gap-5 px-20">
        {adminRoutes.map((item) => (
          <Link href={item.route} id={item.id} key={item.id}>
            {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
          </Link>
        ))}
      </div>
      <div className="w-full md:w-3/4 flex flex-col bg-[#EFF6FF]">
        <div className="flex flex-row justify-between px-2 md:px-8 lg:px-20 mt-5 items-center">
          <span className="font-bold text-base md:text-xl lg:text-2xl text-[#8C8C8C]">
            Welcome, Srimanvit Pattanaik
          </span>
          <button
            className="bg-blue-500 text-white rounded-md p-2 whitespace-nowrap"
            onClick={() => handleLogout()}
          >
            Sign out
          </button>
        </div>
        <div className="px-2 md:px-8 lg:px-20">{children}</div>
      </div>
    </div>
  );
}
