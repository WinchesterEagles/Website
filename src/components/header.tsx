"use client";
import React from "react";
import { useState, useRef } from "react";
import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi";
import { SiInstagram } from "react-icons/si";
import { IoArrowBack } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";

// used to generae Hamburger menu and navbar
// reflect the website pages
// add new pages here and menus loops will take care of the formatting
const MenuItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Adults", href: "/adults" },
  { label: "Juniors", href: "/juniors" },
  { label: "Teams", href: "/teams" },
  { label: "Important Documents", href: "/important-documents" },
];

// hamburger menu on mobile
// isOpen and onClose parameters must be set on prop call (see header for example)
function HamburgerMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={` flex flex-col fixed bottom-0 left-0 right-0 h-screen bg-white z-50
        transform transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
    >
      <Image
        src="/images/logo.png"
        alt="club's logo"
        width={75}
        height={75}
        className="mt-4"
      />

      <div className=" flex flex-row ml-6 mt-4 justify-between  ">
        <ul className="w-1/2 font-bold">
          {MenuItems.map(({ label, href }) => (
            <li key={label} className="py-3 xl:px-6 2xl:px-8">
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <IoArrowBack
          className="pr-4 pt-3 text-blue-900 w-11 h-11"
          onClick={onClose}
        />
      </div>

      <div className="flex flex-row w-2/3 ml-6 mt-4 border-t-2 border-amber-500">
        <SiInstagram size={25} className=" text-blue-900 mt-2 mr-1" />
        <FaFacebook size={25} className=" text-blue-900  mt-2 ml-1 " />
      </div>
    </div>
  );
}

// NavBar on desktop
function NavBar() {
  return (
    <div className="flex flex-row justify-between w-5/6 mx-auto 2xl:w-3/4  ">
      <Image
        className="mt-4 items-center"
        src="/images/logo.png"
        alt="club's logo"
        width={150}
        height={150}
      />

      <ul className="flex flex-row  items-end  ">
        {MenuItems.map(({ label, href }) => (
          <li
            key={label}
            className=" px-4 hover:text-blue-900 cursor-pointer text-2xl relative group  transform transition-transform duration-200 hover:scale-115"
          >
            <a
              className="transition-colors duration-200 group-hover:text-amber-500"
              href={href}
            >
              {label}
            </a>
            <span className="absolute left-0 -bottom-[5px] h-[4px] w-0 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      <div className="flex flex-row  mt-4 items-center">
        <SiInstagram className=" w-11 h-11 text-blue-900 pr-2 mt-4 cursor-pointer hover:text-amber-500 transition-colors duration-200 transform hover:scale-115" />
        <FaFacebook className=" w-11 h-11 text-blue-900  mt-4 cursor-pointer hover:text-amber-500 transition-colors duration-200 transform  hover:scale-115" />
      </div>
    </div>
  );
}

export default function header() {
  const [isMenuOpen, setMenuState] = useState(false);

  return (
    <div>
      {/* mobile header hides in xl and above*/}
      <div className=" flex flex-row justify-between items-center mx-2 xl:hidden">
        <GiHamburgerMenu
          size={25}
          className=" text-blue-950 cursor-pointer"
          onClick={() => setMenuState(true)}
        />
        <Image
          src="/images/logo.png"
          alt="club's logo"
          width={75}
          height={75}
        />
        <div className=" flex flex-row w-fit">
          <SiInstagram size={25} className=" text-blue-900 mr-1  " />
          <FaFacebook size={25} className=" text-blue-900 ml-1 " />
        </div>

        <HamburgerMenu
          isOpen={isMenuOpen}
          onClose={() => setMenuState(false)}
        />
      </div>

      {/* desktop header shows in xl and above*/}
      <div className="hidden xl:flex">
        <NavBar></NavBar>
      </div>
    </div>
  );
}
