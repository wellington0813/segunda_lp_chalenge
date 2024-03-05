import Image from "next/image"
import Cell from "../assets/cellphone.webp"
import Link from "next/link";

import QRcode from "../assets/qrcode.svg"

const Fourth = () =>{
    return(
        
        <section className="max-w-7xl px-4 md:mx-auto md:px-10 py-24 ">
         
            <div className="text-white">
                <h1 className="md:text-4xl sm:text-4xl text-2xl font-bold py-2">
                    Mergulhe na <span className="text-[#00ff5f]">experiência</span> de um banco preparado para o futuro.                
                </h1>

                <p className="mt-3 opacity-50">
                    No Next, você não só tem acesso à conta e cartão, mas também realiza todas as suas transações pelo aplicativo, desfrutando de vantagens especiais que impulsionam a realização dos seus planos.
                </p>
                
                <div>
                    <div className="bg-zinc-800 rounded-lg p-5 md:p-10 flex flex-col justify-between mt-10">
                        <h1 className="md:text-4xl sm:text-4xl text-2xl font-bold py-2">
                            Abra já sua <span className="text-[#00ff5f]">conta</span> baixando nosso aplicativo ou escaneie o <span className="text-[#00ff5f]">QRCODE</span> 
                        </h1>
                        <div className="text-white">
                            <div className="flex justify-center items-center">
                                <Image className="" src={QRcode} width={300} height={300} alt="imagem qrcode"/>
                            </div>
                        </div>
                    </div>
                </div>
            

                

                          
            </div>
        </section>
    )
}

export default Fourth