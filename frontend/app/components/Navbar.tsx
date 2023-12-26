import Image from "next/image";
import React from "react";
import logo from "../../public/assets/bbt-logo.png";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="px-10 md:px-28 py-5 flex justify-between bg-black">
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={120} height={120} />
        </Link>
        <ul className="hidden md:flex flex-row gap-4 text-white items-center">
          <Link href={"/collections"}>Buy Car</Link>
          <Link href={"/sell-cars"}>Sell Car</Link>
          <Link href={"/emi-calculator"}>EMI Calculator</Link>
          <Link href={"/contact"}>Contact Us</Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
