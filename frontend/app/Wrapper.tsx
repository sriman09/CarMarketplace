"use client";

import React from "react";
import ReactModal from "react-modal";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import { SpeedInsights } from "@vercel/speed-insights/next";

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToastContainer />
      <SpeedInsights />
      <RecoilRoot>{children}</RecoilRoot>
    </>
  );
}

export default Wrapper;
