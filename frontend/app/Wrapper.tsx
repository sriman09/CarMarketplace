"use client";

import React from "react";
import ReactModal from "react-modal";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";

ReactModal.setAppElement("#modal-container");

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div id="modal-container">
      <ToastContainer />
      <RecoilRoot>{children}</RecoilRoot>
    </div>
  );
}

export default Wrapper;
