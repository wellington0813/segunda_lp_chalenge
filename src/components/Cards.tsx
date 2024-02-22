import Visa from "../assets/visaIcon.svg";
import { FcSimCardChip } from "react-icons/fc";
import { FaWifi } from "react-icons/fa6";
import Image from "next/image";
import NextBank from "../assets/nextIcon.svg";

interface PropsCard {
  variant?: string;
}

export function Cards({ variant }: PropsCard) {
  return (
    <div
      className={`${
        variant ? "bg-[#313131]" : "bg-black"
      }  min-h-64 w-40 rounded-lg z-0 flex flex-col rotate-45 justify-between `}
    >
      <Image className="p-10 -rotate-90" src={NextBank} alt="logo banco" width={200} />
      <div className="flex items-center justify-between p-2 ">
        <div className="flex items-center mb-2">
          <FaWifi className="text-white -rotate-90" size={20} />
          <FcSimCardChip className=" -rotate-90" size={30} />
        </div>
        <Image
          className="-rotate-90 bottom-3 right-2"
          src={Visa}
          alt="logo banco"
          width={30}
        />
      </div>
    </div>
  );
}
