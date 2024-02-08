'use client'
import React, {useState} from "react";
import {TiThMenu, TiTimes  } from 'react-icons/ti'
import { IoNavigateCircleOutline } from "react-icons/io5";

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => (setNav(!nav))

    return(
        <div className="flex justify-between items-center h-24 max-w-[1240] mx-auto px-4 text-white">
           <h1 className="w-full text-3xl font-bold text flex inline items-center">CRIPT<IoNavigateCircleOutline size={30} className="text-[#9ae919]"/></h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Apresentação</li>
                <li className="p-4">Motivos</li>
                <li className="p-4">Proposta</li>
                <li className="p-4">Contato</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ?  <TiTimes  size={40}/> :  <TiThMenu size={30}/>}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-700 ease-in-out duratio-500' : 'fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold text m-4">WELL0813.</h1>
                <ul className="p-4">
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">Apresentação</li>
                    <li className="p-4 border-b border-gray-600">Motivos</li>
                    <li className="p-4 border-b border-gray-600">Proposta</li>
                    <li className="p-4">Contato</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar