
export default function Planes() {
  return (
    <section id="plan" className="w-full px-6 py-20 md:px-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Plan de salud <span className="text-teal-600">adaptado a tus necesidades</span>
        </h2>
        <p className="text-gray-700 mt-2">Escoge el plan que se adapte a lo que más necesites</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Plan Básico */}
        <div className="border rounded-[50px] p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-center mb-2">Plan básico</h3>
            <p className="text-center mb-4">S/xx.xx Mensual o<br />S/xx.xx Anual</p>
            <p className="text-sm text-center text-gray-700 mb-6">
              Pensado para quienes buscan una atención médica de calidad a un precio accesible. Incluye los servicios esenciales para el cuidado de tu salud con la confianza y respaldo de nuestro equipo médico.
            </p>
            <ul className="text-center text-sm space-y-2 font-semibold text-gray-800">
              <li>Consultas médicas generales ilimitadas</li>
              <li>Acceso a especialistas con tarifa preferencial</li>
              <li>Descuentos en estudios de laboratorio e imagenología</li>
              <li>Atención prioritaria en urgencias básicas</li>
              <li>Seguimiento médico digital</li>
            </ul>
          </div>
          <div className="mt-8">
            <div className="bg-black text-white text-center px-4 py-3 rounded-full mb-4">
              Ideal para mantener un control regular de tu salud sin complicaciones.
            </div>
            <div className="flex justify-center">
              <button className="bg-teal-600 text-white px-6 py-2 rounded-full font-semibold">Solicitar</button>
            </div>
          </div>
        </div>

        {/* Plan Deluxe */}
        <div className="bg-teal-700 text-white rounded-[50px] p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-center mb-2">Plan Deluxe</h3>
            <p className="text-center mb-4">S/xx.xx Mensual o<br />S/xx.xx Anual</p>
            <p className="text-sm text-center mb-6">
              Nuestro plan más completo, diseñado para quienes buscan un cuidado médico integral, cómodo y con acceso preferencial a todos nuestros servicios.
            </p>
            <ul className="text-center text-sm space-y-2 font-semibold">
              <li>Consultas médicas generales y con especialistas ilimitadas</li>
              <li>Estudios de laboratorio e imagenología incluidos</li>
              <li>Chequeos médicos preventivos anuales</li>
              <li>Atención médica a domicilio (según disponibilidad)</li>
              <li>Línea directa con médicos las 24/7</li>
              <li>Habitaciones privadas en caso de hospitalización</li>
              <li>Acceso preferente a cirugías programadas</li>
            </ul>
          </div>
          <div className="mt-8">
            <div className="bg-black text-white text-center px-4 py-3 rounded-full mb-4">
              La opción perfecta para cuidar tu salud con máxima comodidad, seguridad y beneficios exclusivos.
            </div>
            <div className="flex justify-center">
              <button className="bg-white text-teal-700 px-6 py-2 rounded-full font-semibold">Solicitar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}