import Image from "next/image";

export default function PerspectiveSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 px-6">
      <div className="max-w-7xl mx-auto border border-dashed border-blue-300 rounded-xl p-10">
        <div className="grid grid-cols-2 gap-12">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-10">
            {/* TEXT */}
            <div>
              <span className="inline-block text-sm bg-gray-200 px-4 py-1 rounded-full mb-4 text-gray-600">
                Unsere Perspektive
              </span>

              <h2 className="text-[40px] font-bold text-gray-900 leading-tight mb-6">
                Verankert in Beständigkeit. <br />
                Stark im Wandel.
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Millennials haben den Wandel nicht nur erlebt, sondern
                mitgestaltet. Sie schätzt Beständigkeit, persönlichen Austausch
                und langfristiges Denken – und beherrscht zugleich die Sprache
                der digitalen Transformation: vernetzt, agil und
                lösungsorientiert. Ideale Brückenbauer zu allen Generationen.
                Ergebnisorientiert, transparent und mit Tempo.
              </p>
            </div>

            {/* BOTTOM IMAGE */}
            <div className="relative w-full h-[320px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/About/Building.png"
                alt="office"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-10">
            {/* TOP IMAGE */}
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/About/office.png"
                alt="office"
                fill
                className="object-cover"
              />
            </div>

            {/* TEXT */}
            <p className="text-gray-600 leading-relaxed">
              Gerade im Management ist diese doppelte Verankerung ein grosser
              Vorteil: Wer die Wurzeln versteht und zugleich den Wandel treiben
              kann, schafft nachhaltige Entwicklung. Wir bringen diese
              Perspektive mit und verbinden Erfahrung mit Innovationsgeist,
              operative Exzellenz mit strategischer Weitsicht.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
