"use client"

import Image from "next/image"
import Link from "next/link"
import LogoMedisben from "@/app/landing/Navbar/images/medisben.png"
export default function Footer() {
  return (
    <footer className="bg-[#158c8c] text-white py-12 px-6 md:px-16">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Logo and Description */}
        <div className="flex flex-col items-start gap-4 max-w-xs">
          <Image src={LogoMedisben} alt="Logo Medisben" width={200} />
          <p className="text-sm">
            Citas, doctores, promociones y especialidades médicas.
          </p>
          <p className="text-sm mt-2">© 2025. All rights reserved.</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 text-sm">
          <div>
            <h4 className="text-lg font-bold">Contacto</h4>
            <p>(+51) 983 428 843</p>
          </div>
          <div>
            <h4 className="text-lg font-bold">Ubicación</h4>
            <p>Av. Alfredo Benavides #2595 - Miraflores</p>
          </div>
          <div>
            <h4 className="text-lg font-bold">Horario de atención</h4>
            <p>Lunes - Viernes 9:00 am - 9:00 pm</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full md:w-auto">
          <button className="bg-white text-black font-bold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition">
            Agenda tu cita
          </button>
        </div>
      </div>
    </footer>
  );
}
