import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Secound from "@/components/Secound";
import Third from "@/components/Third";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Secound/>
      <Third/>
    </div>
  );
}
