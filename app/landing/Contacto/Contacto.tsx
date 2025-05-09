"use client"

import Image from "next/image"
import MapaSVG from "@/app/landing/Contacto/images/mapa.svg"
import ContactoSVG from "@/app/landing/Contacto/images/whatsapp.svg"
import CalendarSVG from "@/app/landing/Contacto/images/calendar.svg"
import ContactoMedisben from "@/app/landing/Contacto/images/contacto.png"
export default function Contacto() {
  return (
    <section className="bg-white py-20 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <div className="flex-1 space-y-6 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Nos encontramos en...
        </h2>
        <div className="space-y-4">
          <div className="flex items-center border border-teal-700 rounded-xl px-6 py-4 text-teal-700 text-lg gap-4">
            <Image
              src={MapaSVG}
              alt="Mapa medisben"
              className="w-10 h-10 object-contain"
            />
            <p>
              Av. Alfredo Benavides #2595 <br />
              <strong>Miraflores</strong>
            </p>
          </div>
          <div className="flex items-center border border-teal-700 rounded-xl px-6 py-4 text-teal-700 text-lg gap-4">
            <Image
              src={ContactoSVG}
              alt="Contacto medisben"
              className="w-10 h-10 object-contain"
            />
            <p>(+51) 983 428 843</p>
          </div>
          <div className="flex items-center border border-teal-700 rounded-xl px-6 py-4 text-teal-700 text-lg gap-4">
            <Image
              src={CalendarSVG}
              alt="Calendar medisben"
              className="w-10 h-10 object-contain"
            />
            <p>Lunes - Viernes 9:00 am - 9:00 pm</p>
          </div>
        </div>
        <button className="bg-teal-700 text-white font-bold py-3 px-8 rounded-full w-max hover:bg-teal-800 transition">
          Agenda tu cita
        </button>
      </div>

      {/* Right Content */}
      <div className=" relative">
        <Image
          src={ContactoMedisben}
          alt="Mapa de ubicación"
          width={600}
          height={600}
          className="w-full h-auto object-contain"
        />

      </div>
    </section>
  );
}
