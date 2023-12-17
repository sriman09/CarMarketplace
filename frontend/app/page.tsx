import Hero from "./components/Hero";
import HowItWork from "./components/HowItWork";
import Latest from "./components/Latest";
import PlanningToSell from "./components/PlanningToSell";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <PlanningToSell />
      <HowItWork />
      <Latest />
    </main>
  );
}
