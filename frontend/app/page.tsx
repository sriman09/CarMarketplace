"use client";
import { RecoilRoot } from "recoil";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWork from "./components/HowItWork";
import Latest from "./components/Latest";
import Navbar from "./components/Navbar";
import PlanningToSell from "./components/PlanningToSell";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <RecoilRoot>
        <Navbar />
        <Hero />
        <PlanningToSell />
        <HowItWork />
        <Latest />
        <Footer />
      </RecoilRoot>
    </main>
  );
}
