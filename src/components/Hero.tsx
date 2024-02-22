import NextBank from "../assets/nextIcon.svg";
import Image from "next/image";
import { Cards } from "./Cards";

const Hero = () => {
  return (
    <div className="pt-48 pb-24">
      <div className="grid lg:grid-cols-2 gap-10 max-w-7xl px-4 mx-auto">
        {/* TITULO */}
        <div className="text-white sm:mb-10">
          <p className="">
            ganhe <span className="text-[#00ff5f]">15%</span> de desconto na
            primeira compra
          </p>
          <h1 className="md:text-6xl sm:text-6xl text-3xl font-bold py-2">
            <span className="text-[#00ff5f]">NEXT</span> o Banco que faz tudo
          </h1>
          <p className="text-wrap opacity-50">
            pegue o que você ama e aumente ao longo de semanas ou meses
          </p>
        </div>

        {/* CARTOES */}
        <div className="relative">
          <div className="absolute w-full h-full">
            <div className="flex items-center justify-center">
              <div className="hidden md:block">
              <Cards />
              </div>
              <Cards variant="black"/>
            </div>
          </div>
          <Image src={NextBank} alt="logo next" width={550} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
