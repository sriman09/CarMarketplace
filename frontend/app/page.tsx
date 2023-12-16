import Hero from "./components/Hero";
import PlanningToSell from "./components/PlanningToSell";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <PlanningToSell />
    </main>
  );
}
