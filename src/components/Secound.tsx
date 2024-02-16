import Image from "next/image"
import Cell from "../assets/cellphone.webp"



import Girl from "../assets/girl.png"

const Secound = () => {
    return(

        <div className="pb-24 pt-10 max-h-[1000px] h-screen max-w-7xl px-4 md:mx-auto ">
          
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
                <div className="">
                    <Image className="w-[400px] mx-auto my-4" src={Cell} alt=""/>
                </div>

            {/* CARTOES */}  
                <div className="">
                    <div className="bg-[#00ff5f] p-3 lg:w-2/3 sm:w-full rounded-lg mt-2 ">
                        <h1 className="mb-3 font-bold">Rapido e seguro</h1>
                        <p>fornece o serviço bancário mais rápido e seguro</p>
                    </div>
                    <div className="bg-[#00ff5f] p-3 lg:w-2/3 sm:w-full rounded-lg mt-2 ">
                        <h1 className="mb-3 font-bold">parcelamento on-line</h1>
                        <p>oferece parcelamento em qualquer compra online</p>
                    </div>
                    <div className="bg-[#00ff5f] p-3 lg:w-2/3 sm:w-full rounded-lg mt-2 ">
                        <h1 className="mb-3 font-bold">Rapido e seguro</h1>
                        <p>fornece o serviço bancário mais rápido e seguro</p>
                    </div>
                    <div className="bg-[#00ff5f] p-3 lg:w-2/3 sm:w-full rounded-lg mt-2 ">
                        <h1 className="mb-3 font-bold">Rapido e seguro</h1>
                        <p>fornece o serviço bancário mais rápido e seguro</p>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Secound