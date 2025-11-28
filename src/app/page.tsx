import { Hero } from "../components/sections/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <main className="flex min-h-screen w-full flex-col items-center justify-between sm:items-start">
        <Hero />
      </main>
    </div>
  );
}
