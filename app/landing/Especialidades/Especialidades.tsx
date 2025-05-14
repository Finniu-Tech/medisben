import Image from "next/image";
import Medicina from "@/app/landing/Especialidades/images/general.png";
import Odontologia from "@/app/landing/Especialidades/images/dental.png";
import Urologia from "@/app/landing/Especialidades/images/urologia.png";

export default function Especialidades() {
  return (
    <section id="especialidades" className="max-w-7xl bg-white px-6 py-20 md:px-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">Especialidades</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
        {/* Card 1 */}
        <div className="bg-white border border-gray-300 rounded-3xl px-8 py-6 flex flex-col items-center text-center max-w-sm shadow-md">
          <Image src={Medicina} alt="Medicina general" className="w-40 h-40 object-contain mb-6" />
          <h3 className="text-xl font-semibold mb-2">Medicina general</h3>
          <p className="text-sm text-gray-600 mb-6">
            Consulta médica integral para el diagnóstico y tratamiento de diversas condiciones de salud.
          </p>
          <button className="bg-black text-white text-sm font-semibold px-6 py-3 rounded-full">
            Ver más
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-300 rounded-3xl px-8 py-6 flex flex-col items-center text-center max-w-sm shadow-md">
          <Image src={Odontologia} alt="Odontología" className="w-40 h-40 object-contain mb-6" />
          <h3 className="text-xl font-semibold mb-2">Odontología</h3>
          <p className="text-sm text-gray-600 mb-6">
            Consulta médica integral para el diagnóstico y tratamiento de diversas condiciones de salud.
          </p>
          <button className="bg-black text-white text-sm font-semibold px-6 py-3 rounded-full">
            Ver más
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-gray-300 rounded-3xl px-8 py-6 flex flex-col items-center text-center max-w-sm shadow-md">
          <Image src={Urologia} alt="Urología" className="w-40 h-40 object-contain mb-6" />
          <h3 className="text-xl font-semibold mb-2">Urología</h3>
          <p className="text-sm text-gray-600 mb-6">
            Consulta médica integral para el diagnóstico y tratamiento de diversas condiciones de salud.
          </p>
          <button className="bg-black text-white text-sm font-semibold px-6 py-3 rounded-full">
            Ver más
          </button>
        </div>
      </div>

      <div className="mt-16">
        <button className="border border-black text-black text-sm font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
          Ver todas las especialidades
        </button>
      </div>
    </section>
  );
}