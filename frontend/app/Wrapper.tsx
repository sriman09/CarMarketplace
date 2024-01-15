"use client";

import React from "react";
import ReactModal from "react-modal";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToastContainer />
      <RecoilRoot>{children}</RecoilRoot>
    </>
  );
}

export default Wrapper;
