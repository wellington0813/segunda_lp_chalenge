import Image from "next/image"
import Cell from "../assets/cellphone.webp"
import Link from "next/link";

import { BsCoin } from "react-icons/bs";
import { MdMoneyOff } from "react-icons/md";
import { LuCrown } from "react-icons/lu";

const Third = () =>{
    return(
        
        <section className="max-w-7xl px-4 md:mx-auto px-2 md:px-10 py-24 ">
          <div className="bg-zinc-800 rounded-lg p-5 md:p-10 flex flex-col justify-between">
            <div className="text-white">
                <h1 className="md:text-4xl sm:text-4xl text-2xl font-bold py-2">
                    Potencialize seus <span className="text-[#00ff5f]">sonhos</span> com a abertura da sua conta no <span className="text-[#00ff5f]">Next</span>.
                </h1>

                <p className="mt-3 opacity-50">
                    Desfrute de segurança e praticidade incomparáveis aqui no Next. Além de uma conta com cartão, oferecemos uma experiência completa, incluindo investimentos exclusivos, mimos e muito mais.
                </p>


                <h1 className="md:text-3xl sm:text-3xl text-2xl font-bold py-2 mt-9">
                   Nosso <span className="text-[#00ff5f]">impacto</span> em números
                </h1>
                
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-2">
                    <div>
                        <h1 className="md:text-4xl sm:text-4xl text-2xl font-bold mt-2">
                           200K
                        </h1>
                        <p className="text-[#00ff5f]">Clientes</p>
                    </div>
                    <div>
                        <h1 className="md:text-4xl sm:text-4xl text-2xl font-bold mt-2">
                           97%
                        </h1>
                        <p className="text-[#00ff5f]">Clientes Satisfeitos</p>

                    </div>
                    <div>
                        <h1 className="md:text-4xl sm:text-4xl text-2xl font-bold mt-2">
                           85%
                        </h1>
                        <p className="text-[#00ff5f]">Crescimento Anual</p>

                    </div>
                    <div>
                        <h1 className="md:text-4xl sm:text-4xl text-2xl font-bold mt-2">
                           10B
                        </h1>
                        <p className="text-[#00ff5f]">Reais Administrado</p>
                    </div>
                </div>
            </div>
          </div>
        </section>
    )
}

export default Third