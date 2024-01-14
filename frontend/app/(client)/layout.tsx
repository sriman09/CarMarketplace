"use client";
import { RecoilRoot } from "recoil";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RecoilRoot>
        <Navbar />
        {children}
        <Footer />
      </RecoilRoot>
    </>
  );
}
