import Image from "next/image";
import React from "react";
import logo from "../../public/assets/bbt-logo.png";

function Navbar() {
  return (
    <>
      <div className="px-10 md:px-28 py-5 flex justify-between bg-black">
        <Image src={logo} alt="logo" width={120} height={120} />
        <ul className="hidden md:flex flex-row gap-4 text-white items-center">
          <li>Buy Car</li>
          <li>Sell Car</li>
          <li>EMI Calculator</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
