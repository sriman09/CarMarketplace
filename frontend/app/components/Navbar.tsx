"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../public/assets/marketplace-logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const [activeTab, setActiveTab] = useState<null | string>(null);
  const router = useRouter();
  const routes = [
    {
      id: "Buy Car",
      route: "/collections",
    },
    {
      id: "Sell Car",
      route: "/sell-cars",
    },
    {
      id: "EMI Calculator",
      route: "/emi-calculator",
    },
    {
      id: "Contact Us",
      route: "/contact",
    },
  ];
  const handleSideButtonClick = (item: any) => {
    router.push(item.route);
    setActiveTab(item.id);
  };
  console.log("Active", activeTab);
  useEffect(() => {
    // Set active tab based on initial pathname
    const pathname = window.location.pathname;
    const route = routes.find((item) => item.route === pathname);
    if (route) {
      setActiveTab(route.id);
    }
  }, []); // Run only once on component mount

  return (
    <>
      <div className="px-10 md:px-28 py-5 flex flex-col md:flex-row justify-center items-center md:justify-between bg-black">
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={80} height={80} />
        </Link>
        <div className="flex flex-row gap-2 md:gap-4 text-white items-center whitespace-nowrap pt-5 md:pt-0">
          {routes.map((item) => (
            <button
              onClick={() => handleSideButtonClick(item)}
              key={item.id}
              id={item.id}
              className={`text-sm md:text-base ${
                activeTab === item.id ? "text-red-400" : "text-white"
              }`}
            >
              {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
