"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TiThMenu, TiTimes } from "react-icons/ti";
import { IoNavigateCircleOutline } from "react-icons/io5";
import Logo from "../assets/nextIcon.svg";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => setNav(!nav);

  return (
    <div className="fixed w-full h-24 bg-zinc-800 flex justify-between items-center z-40">
      <div className="flex w-full justify-between max-w-7xl mx-auto px-4 text-white">
        <Image src={Logo} alt="logo banco next" />
        <ul className="hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">Apresentação</li>
          <li className="p-4">Motivos</li>
          <li className="p-4">Proposta</li>
          <li className="p-4">Contato</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <TiTimes size={40} /> : <TiThMenu size={30} />}
        </div>
        <div
          className={
            !nav
              ? "fixed z-40 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-zinc-800 ease-in-out duratio-500"
              : "fixed left-[-100%]"
          }
        >
          <Image className="mt-5 ml-5" src={Logo} alt="logo banco next" />
          <ul className="p-4">
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">Apresentação</li>
            <li className="p-4 border-b border-gray-600">Motivos</li>
            <li className="p-4 border-b border-gray-600">Proposta</li>
            <li className="p-4">Contato</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;