"use client";

import Image from "next/image";

export default function TrustedLogos() {
  return (
    <section className="w-full bg-[#F2F2F2]">
      <div className="max-w-[1200px] mx-auto px-6 py-9">
        <div className="flex items-center justify-between gap-10 flex-wrap">
          
          {/* Left Text */}
          <p className="text-[14px] text-[#6B6B6B] font-medium whitespace-nowrap">
            Anerkannt von Marktführern
          </p>

          {/* Logos */}
          <div className="flex items-center gap-12 flex-wrap">
            
            <Image
              src="/logos/belimo.png"
              alt="Belimo"
              width={90}
              height={28}
              className="object-contain opacity-80"
            />

            <Image
              src="/logos/carel.png"
              alt="Carel"
              width={90}
              height={28}
              className="object-contain opacity-80"
            />

            <Image
              src="/logos/eth.png"
              alt="ETH Zurich"
              width={100}
              height={28}
              className="object-contain opacity-80"
            />

            <Image
              src="/logos/siwf.png"
              alt="SIWF"
              width={80}
              height={28}
              className="object-contain opacity-80"
            />

            <Image
              src="/logos/ksw.png"
              alt="KSW"
              width={100}
              height={28}
              className="object-contain opacity-80"
            />

          </div>
        </div>
      </div>
    </section>
  );
}