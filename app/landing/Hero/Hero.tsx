import Image from "next/image";
import HeroImage from "@/app/landing/Hero/images/Hero1.png"
import DocMedisben from "@/app/landing/Hero/images/doctor.png"
export default function Hero() {
  return (
    <section
        id="home"
        className=" px-6 py-10 md:px-16 md:py-40"
    >
      <div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          style={{
            backgroundImage: `url(${HeroImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
              borderRadius: "50px"
          }}
      >
        {/* Text Content */}
        <div className="md:relative z-20 bg-opacity-80 py-6 px-12 rounded-lg">
          <div className="md:relative md:-top-5 md:-mt-25 bg-black text-white text-center text-sm px-8 py-3 rounded-full mb-4 md:w-[50%]" >
            Nuevas especialidades
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white my-6">
            Cuidamos tu <br /> salud, mejoramos <br /> tu vida.
          </h1>
          <p className="text-white text-lg mb-6">
            Estamos más cerca de ti y con nuevas especialidades, te ayudaremos a cuidar tu salud y prevenir enfermedades a futuro.
          </p>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
            Agenda una cita
          </button>
        </div>
          <div className="relative z-20 md:-mt-50" >
            <Image src={DocMedisben} alt="Doctor Medisben" className="w-full h-auto object-contain" />
          </div>
      </div>
    </section>
  );
}