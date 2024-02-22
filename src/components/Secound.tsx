import Image from "next/image"
import Cell from "../assets/cellphone.webp"
import Link from "next/link";

import { BsCoin } from "react-icons/bs";
import { MdMoneyOff } from "react-icons/md";
import { LuCrown } from "react-icons/lu";

const Secound = () => {
    return(

        <section className="max-w-7xl px-4 md:mx-auto ">
          
            <div className="text-white pb-10 mb-10">
                <p className="text-[#00ff5f]">Você acontece</p>
                <h1 className="md:text-6xl sm:text-6xl text-3xl font-bold py-2">
                    A conta <span className="text-[#00ff5f]">100%</span>  digital
                </h1>
                <p className="text-wrap opacity-50">
                    Resolva sua vida financeira em poucos cliques.
                    O next oferece uma experiência completa com soluções financeiras para facilitar seu dia a dia.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-2 max-w-7xl px-4">
                  {/* TITULO */}
                <div className="">
                    <Image className="w-[400px] mx-auto my-4" src={Cell} alt=""/>
                </div>

            {/* CARTOES */}  
                <div className="">
                    <h1 className="text-[#00ff5f] mb-3 font-bold md:text-4xl sm:text-4xl">Rapido e seguro</h1>
                    <div className="my-2">
                        <p className="text-white text-wrap opacity-50">
                            Com o pacote Next, você garante uma conta digital completa, repleta de benefícios como Mimos, Pix, Seguros, cartão de débito para seus filhos, recarga de celular e muito mais, tudo isso sem taxas ou custos de manutenção.
                        </p>
                        <h1 className="text-[#00ff5f] my-3 font-bold md:text-2xl sm:text-2xl">
                            Mimos e Beneficios:
                        </h1>
                        
                        <div className="items-center">
                           
                            <p className="text-white text-wrap opacity-50 my-3">
                               <span> <LuCrown className="text-[#00ff5f] inline-flex mr-2" size={20}/></span> Mimos exclusivos com descontos 
                            </p>
                            <p className="text-white text-wrap opacity-50 my-3">
                               <span> <BsCoin className="text-[#00ff5f] inline-flex mr-2" size={20}/></span> Compras Internacionais 
                            </p>
                            <p className="text-white text-wrap opacity-50 my-3">
                               <span> <MdMoneyOff  className="text-[#00ff5f] inline-flex mr-2" size={20}/></span> Anuidade grátis 
                            </p>
                        </div>
                        
                        <div className="mt-5">
                            <Link href='https://www.linkedin.com/in/wellington-rodrigues-931902184/'>
                                <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-400 dark:text-green-400 dark:hover:text-white dark:hover:bg-green-500 dark:focus:ring-green-900">Entre em Contato</button>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>   
        </section>
    )
}

export default Secound