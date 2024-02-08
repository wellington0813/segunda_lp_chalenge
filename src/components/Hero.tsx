import Image from "next/image"

import Girl from "../assets/girl.png"

const Hero = () => {
    return(
        <div className="text-white w-full py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="justify-center p-5">
                        <h1 className="md:text-5xl sm:text-5xl text-3xl font-bold py-2">
                            <span className="text-[#9ae919]">
                                Landing Page
                            </span> 
                            baseada em  modelos de sites de
                            <span className="text-[#9ae919]">
                                cripto
                            </span> 
                        </h1>
                        <p className="text-wrap opacity-50">
                            A proposta é transformar suas landing pages em expressões autênticas do seu crescimento no mundo do design e desenvolvimento web. Cada semana é um novo capítulo, uma chance de superar desafios, refinando suas habilidades e compartilhando suas realizações com a comunidade.
                            <br/>
                        </p>
                    </div>
                </div>    
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className=" justify-center p-5">
                        <div className="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p className="text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </div>
                </div>           
            </div>
        </div>
    )
}

export default Hero