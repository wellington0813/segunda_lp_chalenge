import Image from "next/image"
import Cell from "../assets/cellphone.webp"
import Link from "next/link";

import QRcode from "../assets/qrcode.svg"

const Footer = () =>{
    return(
        
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-white">
                <span className="text-sm sm:text-center">
                    Se curtiu o que fiz e tem ideias para botar em prática, me manda uma mensagem! Estou pronto para colaborar! ⚡
                </span>
                <hr className="py-2"/>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                    <li>
                        <a href="https://github.com/wellington0813" className="hover:underline me-4 md:me-6">Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/wellington-rodrigues0813/" className="hover:underline me-4 md:me-6">linkedin</a>
                    </li>
                    <li>
                        <a href="https://api.whatsapp.com/send/?phone=5515996317702&text&type=phone_number&app_absent=0" className="hover:underline">Contato</a>
                    </li>
                   
                </ul>
            </div>
        </footer>
    )
}

export default Footer