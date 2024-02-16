import Image from "next/image"
import NextBank from "../assets/nextIcon.svg"
import Visa from "../assets/visaIcon.svg"
import { FcSimCardChip } from "react-icons/fc";
import { FaWifi } from "react-icons/fa6";



import Girl from "../assets/girl.png"

const Hero = () => {
    return(

        <div className="pb-10 pt-20 max-h-[1000px] h-screen md:px-4 px-0 ">
            <div className="grid lg:grid-cols-2 gap-2 max-w-7xl px-4 md:mx-auto">
                  {/* TITULO */}
                <div className="text-white sm:mb-10">
                    <p className="">ganhe <span className="text-[#00ff5f]">15%</span> de desconto na primeira compra</p>
                    <h1 className="md:text-6xl sm:text-6xl text-3xl font-bold py-2">
                     <span className="text-[#00ff5f]">NEXT</span>  o Banco que faz tudo
                    </h1>
                    <p className="text-wrap opacity-50">
                    pegue o que você ama e aumente ao longo de semanas ou meses
                    </p>
                </div>

            {/* CARTOES */}  
                <div className="flex items-center justify-center sm:mt-11">
                    <div className="absolute -rigth-40 -z-10">
                        <Image src={NextBank} alt="logo next" width={550}/>
                    </div>
                    <div className="bg-[#313131] p-10 min-h-64 w-40 rotate-45 rounded-lg z-0 hidden lg:block">
                        <Image className="-rotate-90" src={NextBank} alt="logo banco" width={200}/>
                        <Image className="-rotate-90 absolute bottom-3 right-2" src={Visa} alt="logo banco" width={30}/>
                        <FcSimCardChip className="-rotate-90 absolute bottom-5 left-30" size={30}/>
                        <FaWifi className="text-white -rotate-90 absolute bottom-6 left-6" size={20}/>
                    </div>
                    <div className="bg-[#282828] p-10 min-h-64 w-40 rotate-45 rounded-lg z-10">
                        <Image className="-rotate-90" src={NextBank} alt="logo banco" width={200}/>
                        <Image className="-rotate-90 absolute bottom-3 right-2" src={Visa} alt="logo banco" width={30}/>
                        <FcSimCardChip className="-rotate-90 absolute bottom-5 left-30" size={30}/>
                        <FaWifi className="text-white -rotate-90 absolute bottom-6 left-6" size={20}/>
                    </div>  
                </div>
            </div>    
        </div>
    )
}

export default Hero