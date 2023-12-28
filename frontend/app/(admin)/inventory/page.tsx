"use client";
import React, { useRef } from "react";
import BackButton from "../components/BackButton";
import SearchBar from "../components/SearchBar";
import BlueButton from "../components/BlueButton";

function Page() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <>
      <BackButton back={false} />
      <div className="flex flex-col mt-5 md:mt-10">
        <div className="flex flex-row justify-between">
          <SearchBar placeholder="Search Inventory" inputRef={inputRef} />
          <BlueButton>Create</BlueButton>
        </div>
      </div>
    </>
  );
}

export default Page;
