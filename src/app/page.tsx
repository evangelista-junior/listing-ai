import { About } from "@/src/components/sections/About";
import { Hero } from "@/src/components/sections/Hero";
import { Product } from "@/src/components/sections/Product";
import { Features } from "../components/sections/Features";
import { Benefits } from "../components/sections/Benefits";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <main className="flex min-h-screen w-full flex-col items-center justify-between sm:items-start">
        <Hero />
        <About />
        <Product />
        <Features />
        <Benefits />
      </main>
    </div>
  );
}
