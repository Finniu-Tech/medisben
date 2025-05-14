"use client"

import Image from "next/image"
import Link from "next/link"
import LogoMedisben from "@/app/landing/Navbar/images/medisben.png"
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white text-black px-6 py-4 md:px-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="#">
            <Image
              width={150}
              height={40}
              priority
              src={LogoMedisben}
              alt="MedisBen logo"
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-black">
          <a href="#home" className="hover:text-teal-400">Inicio</a>
          <a href="#somos" className="hover:text-teal-400">Nosotros</a>
          <a href="#especialidades" className="hover:text-teal-400 transition duration-300">Especialidades</a>
          <a href="#plan" className="hover:text-teal-400">Plan de salud</a>
          <a href="#citas" className="hover:text-teal-400">Citas</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-black text-sm">
          <a href="#" className="hover:text-teal-400">Inicio</a>
          <a href="#" className="hover:text-teal-400">Nosotros</a>
          <a href="#especialidades" className="hover:text-teal-400">Especialidades</a>
          <a href="#" className="hover:text-teal-400">Plan de salud</a>
          <a href="#" className="hover:text-teal-400">Citas</a>
        </div>
      )}
    </header>
  )
}
