import Hero from "@/app/landing/Hero/Hero"
import About from "@/app/landing/About/About";
import Especialidades from "@/app/landing/Especialidades/Especialidades";
import Planes from "@/app/landing/Planes/Planes";
import Contacto from "@/app/landing/Contacto/Contacto";
export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between">
          <Hero/>
          <About/>
          <Especialidades/>
          <Planes/>
          <Contacto/>



      </main>
  );
}
