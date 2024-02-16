import Image from "next/image"
import Cell from "../assets/cellphone.webp"



import Girl from "../assets/girl.png"

const Third = () => {
    return(

        <div className=" ">
          
          <div className="text-white pb-10">
                    <p className="text-[#00ff5f]">Você acontece</p>
                    <h1 className="md:text-6xl sm:text-6xl text-3xl font-bold py-2">
                     A conta <span className="text-[#00ff5f]">100%</span>  digital
                    </h1>
                    <p className="text-wrap opacity-50">
                        Resolva sua vida financeira em poucos cliques.
                        O next oferece uma experiência completa com soluções financeiras para facilitar seu dia a dia.
                    </p>
            </div>
          <div className="grid lg:grid-cols-2 gap-2 max-w-7xl px-4 md:mx-auto">
                  {/* TITULO */}
               

            {/* CARTOES */}  
                <div className="">
                   
                </div>
            </div>   
        </div>
    )
}

export default Third