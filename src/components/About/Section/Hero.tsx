import Image from "next/image";
import { Instrument_Serif } from "next/font/google"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
})

export default function HeroSection() {
  return (
    <section className="w-full bg-[#FBFAF8] pt-[80px] lg:pt-[120px] pb-0 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-[60px]">

        {/* ── Title block (Eyebrow + Headline + Subheadline) ── */}
        <div className="flex flex-col items-center text-center gap-0">

          {/* Eyebrow */}
          <div className="inline-flex flex-row items-center px-[14px] pl-[10px] py-[4px] gap-[4px] bg-[#EBEDEC] rounded-[54px] h-[35px] mb-[48px] max-md:mb-[20px]">
            <span className="font-['Inter',sans-serif] font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-[#0C2217]">
              Über uns - Ihr Gegenüber im Mandat
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-['Inter',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[62px] leading-[115%] tracking-[-2px] text-center text-[#0C2217] m-0 max-w-[961px] mx-auto">
            Transformation führen. Stabilität schaffen.{" "}
            <span className={`${instrumentSerif.className} text-[#7b6cf6] italic!`}>
              Zukunft sichern!
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-['Inter',sans-serif] font-medium text-[16px] sm:text-[18px] lg:text-[21px] leading-[170%] text-center text-[#565959] opacity-80 m-0 max-w-[822px] mx-auto mt-8 lg:mt-[48px]">
            Berater analysieren – wir setzen um: langfristig orientiert,
            strategisch verankert und operativ präsent. Für schnelle Wirksamkeit
            und messbare Resultate.
          </p>

        </div>

        {/* ── Hero Image ── */}
        <div className="mt-12 lg:mt-16 relative w-full h-[260px] sm:h-[360px] lg:h-[425px] rounded-tr-[16px] rounded-br-[16px] overflow-hidden">
          <Image
            src="/assets/About/hero-meeting.png"
            alt="Office meeting"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

      </div>
    </section>
  );
}