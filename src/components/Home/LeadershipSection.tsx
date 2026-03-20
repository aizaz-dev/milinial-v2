"use client";

import { ArrowUpRight } from "lucide-react";
import Link from 'next/link';

export default function LeadershipSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[rgba(241,241,241,0.15)] pb-20 pt-[100px] lg:pb-[80px] lg:pt-[130px] px-6 lg:px-[160px] flex justify-center items-center min-h-[763px]">

      {/* Background patterns and blurs */}
      <div className="absolute w-[1442px] h-[530px] left-[50%] -translate-x-[50%] top-[197px] bg-linear-to-r from-[rgba(174,175,179,0.1)] to-[rgba(255,255,255,0.1)] opacity-40 blur-[50px] z-0 pointer-events-none" />

      {/* Background blocks logic to simulate pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden hidden xl:block pointer-events-none w-full max-w-[1440px] mx-auto opacity-50">

        {/* Left Side Group 34532 */}
        <div className="absolute w-[477.42px] h-[368.97px] left-[-114.42px] top-[412px]">
          <div className="absolute w-[187.47px] h-[152.5px] left-[-11.94px] top-[216.47px] bg-[rgba(255,255,255,0.75)] backdrop-blur-[2px]"></div>
          <div className="absolute w-[187.47px] h-[152.5px] left-[73.05px] top-0 bg-[rgba(255,255,255,0.75)] backdrop-blur-[2px]"></div>
          <div className="absolute w-[187.47px] h-[152.5px] left-[-114.42px] top-0 bg-[rgba(255,255,255,0.75)] backdrop-blur-[2px]"></div>
          <div className="absolute w-[187.47px] h-[152.5px] left-[175.53px] top-[152.5px] bg-[rgba(255,255,255,0.75)] backdrop-blur-[2px]"></div>
        </div>

        {/* Right Side Group 34533 */}
        <div className="absolute w-[381.36px] h-[395px] right-[-114px] top-[-58px]">
          <div className="absolute w-[190.68px] h-[155.11px] right-0 top-0 bg-[rgba(255,255,255,0.75)] backdrop-blur-[2px]"></div>
          <div className="absolute w-[190.68px] h-[155.11px] right-[190.68px] top-[84.78px] bg-[rgba(255,255,255,0.75)] backdrop-blur-[2px]"></div>
          <div className="absolute w-[190.68px] h-[155.11px] right-[105.84px] top-[239.89px] bg-[rgba(255,255,255,0.75)] backdrop-blur-[2px]"></div>
        </div>
      </div>

      {/* Main Content Group */}
      <div className="relative z-10 flex flex-col items-center gap-[50px] w-full max-w-[1156px] mx-auto min-h-[609px] justify-center">

        {/* Title Container */}
        <div className="relative w-full max-w-[1043px] flex flex-col items-center pt-[10px]">

          {/* Eyebrow */}
          <div className="absolute top-[-30px] lg:top-[-41px] flex flex-row items-center px-[14px] pl-[10px] py-[4px] gap-[4px] bg-[#FFFFFF] border border-[rgba(0,0,0,0.04)] rounded-[54px] w-[162px] h-[35px] justify-center">
            <span className="font-['Figtree'] font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-[#0C2217] whitespace-nowrap">
              Warum Leadership?
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-['Inter'] font-semibold text-[32px] md:text-[57px] leading-[1.1] lg:leading-[60px] tracking-[-1.5px] text-center text-[#1E1A1C] m-0 w-full mt-10 lg:mt-0">
            Mit Erfahrung und Methodik <br className="hidden lg:block" />
            zu Wirksamkeit mit unserem Führungs- <br className="hidden lg:block" />
            prinzip Leadership by Congruence
          </h2>

        </div>

        {/* Paragraph */}
        <p className="w-full max-w-[936px] font-['Inter'] font-medium text-[16px] lg:text-[18px] leading-[1.6] lg:leading-[28px] text-center text-[#363435] m-0">
          Unternehmern und Führungskräften wird heute alles abverlangt: Geopolitische Entwicklungen vorwegnehmen, Nachfolgeplanungen angehen, langjährig vernachlässigte Substanzwerte regenerieren und Strukturen verschlanken; zu geringen Kosten und überschaubaren Risiken für alle Stakeholder.
          <br /><br />
          Klassisches Management greift nicht mehr. Es führt zu Frustration mit untragbaren mikroökonomischen Schäden für das Gesamtunternehmen. Mit verheerenden Folgen.
          <br /><br />
          Mit unserer Unterstützung erhalten Sie in herausfordernden Zeiten die Fähigkeit zurück, Veränderungen sicher und erfolgreich umzusetzen.
        </p>

        {/* Button */}
        <Link href="/about" className="flex flex-row justify-center items-center px-[16px] py-[16px] gap-[10px] w-[168.63px] h-[56px] bg-[#1A037F] rounded-[8px] hover:opacity-90 transition-opacity mt-2 font-['Figtree',sans-serif]">
          <span className="font-medium text-[16px] leading-[24px] text-right text-[#FFFFFF]">
            Mehr erfahren
          </span>
          <ArrowUpRight className="text-white w-4 h-4" strokeWidth={2.5} />
        </Link>

      </div>
    </section>
  );
}