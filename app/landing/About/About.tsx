import Image from "next/image";
import HeroImage from "@/app/landing/About/images/hero2.png"
import DocBMedisben from "@/app/landing/About/images/doctora.png"
export default function About() {
  return (
    <section id="somos" className="w-full px-6 py-20 md:px-16 bg-white"
    style={{
            backgroundImage: `url(${HeroImage.src})`,
            backgroundSize: "contain",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
              borderRadius: "50px"
          }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Image */}
        <div className="relative">
          <div className="relative z-10 rounded-[60px] overflow-hidden">
            <Image
              src={DocBMedisben}
              alt="Doctora Medisben"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Quienes somos?
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            En Medisben, somos una clínica comprometida con el bienestar integral de nuestros pacientes.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Desde nuestros inicios, trabajamos con un <strong className="font-semibold">enfoque humano, profesional y cercano</strong>,
            brindando atención médica de calidad respaldada por un equipo multidisciplinario altamente capacitado.
          </p>
        </div>
      </div>
    </section>
  );
}