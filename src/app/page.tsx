import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Secound from "@/components/Secound";
import Third from "@/components/Third";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="md:space-y-24 space-y-12">
        <Hero />
        <Secound />
        <Third />
      </div>
    </div>
  );
}
