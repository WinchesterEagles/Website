"use client";
import React, { useState } from "react";
import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi";
import { SiInstagram } from "react-icons/si";
import { IoArrowBack } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";

const MenuItems = [
  { label: "Home", href: "/" },
  { label: "Adults", href: "/adults" },
  { label: "Juniors", href: "/juniors" },
  { label: "Teams", href: "/teams" },
  { label: "Commitee", href: "/commitee" },
  { label: "Gallery", href: "/gallery" },
  { label: "Important Documents", href: "/important-documents" },
];

// Hamburger menu on mobile
function HamburgerMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`flex flex-col fixed inset-0 h-screen bg-white z-50 transform transition-transform duration-500 ease-in-out overflow-y-auto ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Mobile Menu Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 flex-shrink-0">
        <Image
          src="/images/logo.png"
          alt="club's logo"
          width={45}
          height={45}
        />
        <IoArrowBack
          className="text-blue-900 w-7 h-7 cursor-pointer hover:text-amber-500 transition-colors"
          onClick={onClose}
        />
      </div>

      {/* Natural stacking container so links sit directly below text */}
      <div className="px-6 py-6 flex flex-col space-y-6">
        <ul className="space-y-3 font-bold">
          {MenuItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={onClose}
                className="block w-full py-1.5 text-base text-blue-900 hover:text-amber-500 active:scale-95 transition-all duration-100"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons positioned naturally right below the menu list */}
        <div className="flex flex-row gap-4 pt-4 border-t-2 border-amber-500">
          <a
            href="https://www.instagram.com/wincheaglesvolleyball/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiInstagram
              size={22}
              className="text-blue-900 hover:text-amber-500 transition-colors"
            />
          </a>
          <a
            href="https://www.facebook.com/WinchesterVball/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              size={22}
              className="text-blue-900 hover:text-amber-500 transition-colors"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

// NavBar on desktop
function NavBar() {
  return (
    <div className="max-w-5xl mx-auto px-4 flex flex-row justify-between items-center mt-4">
      <Image
        className="items-center"
        src="/images/logo.png"
        alt="club's logo"
        width={120}
        height={120}
      />

      <ul className="flex flex-row items-center">
        {MenuItems.map(({ label, href }) => (
          <li
            key={label}
            className="px-3 hover:text-blue-900 cursor-pointer text-lg relative group transition-transform duration-200"
          >
            <a
              className="transition-colors duration-200 group-hover:text-amber-500 font-medium"
              href={href}
            >
              {label}
            </a>
            <span className="absolute left-0 -bottom-[5px] h-[3px] w-0 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      <div className="flex flex-row items-center gap-3">
        <a
          href="https://www.instagram.com/wincheaglesvolleyball/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiInstagram className="w-6 h-6 text-blue-900 cursor-pointer hover:text-amber-500 transition-colors transform hover:scale-110" />
        </a>
        <a
          href="https://www.facebook.com/WinchesterVball/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="w-6 h-6 text-blue-900 cursor-pointer hover:text-amber-500 transition-colors transform hover:scale-110" />
        </a>
      </div>
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setMenuState] = useState(false);

  return (
    <div>
      {/* mobile header hides in xl and above */}
      <div className="flex flex-row justify-between items-center mt-1 min-h-[75px] mx-4 xl:hidden relative">
        <GiHamburgerMenu
          size={25}
          className="text-blue-900 cursor-pointer"
          onClick={() => setMenuState(true)}
        />

        <Image
          src="/images/logo.png"
          alt="club's logo"
          width={65}
          height={65}
          className="absolute left-1/2 -translate-x-1/2"
        />

        <div className="flex flex-row gap-3">
          <a
            href="https://www.instagram.com/wincheaglesvolleyball/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiInstagram size={22} className="text-blue-900" />
          </a>
          <a
            href="https://www.facebook.com/WinchesterVball/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={22} className="text-blue-900" />
          </a>
        </div>

        <HamburgerMenu
          isOpen={isMenuOpen}
          onClose={() => setMenuState(false)}
        />
      </div>

      {/* desktop header shows in xl and above */}
      <div className="hidden xl:flex">
        <NavBar></NavBar>
      </div>
    </div>
  );
}
