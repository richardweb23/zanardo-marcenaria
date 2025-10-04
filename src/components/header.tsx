"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { config } from "@/app/data/config";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { imgPath } = config;

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={`${imgPath}/logo-preta.svg`}
            alt="Logo Zanardo Marcenaria"
            width={150}
            height={60}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6  font-medium">
            <li><Link href="/" className="hover:text-yellow-800">Início</Link></li>
            <li><Link href="/sobre" className="hover:text-yellow-800">Sobre</Link></li>
            <li><Link href="/portfolio" className="hover:text-yellow-800">Portfólio</Link></li>
            <li><Link href="/contato" className="hover:text-yellow-800">Contato</Link></li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-6"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block h-0.5 w-full bg-gray-700 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-full bg-gray-700 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-full bg-gray-700 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Início</Link></li>
            <li><Link href="/sobre" onClick={() => setIsOpen(false)}>Sobre</Link></li>
            <li><Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfólio</Link></li>
            <li><Link href="/contato" onClick={() => setIsOpen(false)}>Contato</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
