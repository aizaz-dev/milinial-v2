import Image from "next/image";
import { Instrument_Serif } from "next/font/google"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
})
export default function HeroSection() {
  return (
    <section className="w-full bg-[#FBFAF8] pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* small label */}
        <div className="inline-block bg-[#EBEDEC] text-[#0C2217] text-sm px-4 py-2 rounded-full mb-6">
          Über uns - Ihr Gegenüber im Mandat
        </div>
{/* Heading */}
      <h1 className="text-[34px] md:text-[48px] lg:text-[62px] font-semibold text-[#0f2a22] leading-[115%] tracking-[-2px] text-center">
  Transformation führen. Stabilität schaffen{" "}
  <span className={`${instrumentSerif.className} text-[#7b6cf6] italic`}>
    Zukunft sichern!
  </span>
</h1>

        {/* sub text */}
        <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
          Berater analysieren – wir setzen um: langfristig orientiert,
          strategisch verankert und operativ präsent. Für schnelle Wirksamkeit
          und messbare Resultate.
        </p>
      </div>

      {/* image */}
      <div className="max-w-6xl mx-auto px-6 mt-12">
        <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
          <Image
            src="/assets/About/hero-meeting.png"
            alt="Consulting meeting"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}