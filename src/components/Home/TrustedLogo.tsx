"use client";

import Image from "next/image";

export default function TrustedLogos() {
  const logos = [
    { src: "/assets/Home/logos/logo-2.png", alt: "Belimo", width: 110, height: 42 },
    { src: "/assets/Home/logos/logo-3.png", alt: "CrossKlinik", width: 155, height: 42 },
    { src: "/assets/Home/logos/logo-4.png", alt: "ETH Zurich", width: 187, height: 32 },
    { src: "/assets/Home/logos/logo-5.png", alt: "SIWF", width: 79, height: 32 },
    { src: "/assets/Home/logos/logo-6.png", alt: "KSW", width: 164, height: 26 },
  ];

  return (
    <section
      className="w-full relative z-20 flex justify-center items-center py-10 lg:py-0 lg:h-[170px]"
      style={{ background: 'linear-gradient(90deg, #F7F6F4 0%, #E5E4E3 50%, #F7F6F4 100%)' }}
    >
      <div className="w-full max-w-[1440px] px-6 lg:px-[50px]">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-[48px]">

          {/* Label Text */}
          <p className="font-['Figtree'] font-semibold text-[18px] lg:text-[20px] leading-[170%] text-[#0C2217] text-center lg:text-left whitespace-nowrap m-0 shrink-0">
            Anerkannt von Marktführern
          </p>

          {/* Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-row lg:flex-nowrap items-center justify-center lg:justify-end gap-x-4 gap-y-10 sm:gap-8 lg:gap-[48px] w-full lg:w-auto mt-6 lg:mt-0">
            {logos.map((logo, idx) => (
              <div 
                key={idx} 
                className={`relative flex items-center justify-center ${
                  idx === logos.length - 1 ? 'col-span-2 sm:col-span-1 lg:col-span-1' : ''
                }`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain w-auto h-auto max-h-[28px] max-w-[90px] sm:max-h-[34px] sm:max-w-[110px] lg:max-h-[45px] lg:max-w-[140px]"
                  quality={100}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}