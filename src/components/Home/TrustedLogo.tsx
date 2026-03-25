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
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[60px]"> 
 
          {/* Div 1: Label Text — wider now */} 
          <p 
            className="font-['Figtree'] font-semibold text-[18px] lg:text-[20px] leading-[170%] text-[#0C2217] text-center lg:text-left m-0 shrink-0"
            style={{ minWidth: '320px' }}
          > 
            Anerkannt von Marktführern 
          </p> 
 
          {/* Div 2: Logo container — logos smaller */}
          <div 
            className="flex flex-row items-center justify-between w-full"
            style={{ height: '50px', gap: '40px' }}
          > 
            {logos.map((logo, idx) => ( 
              <div key={idx} className="flex items-center justify-center shrink-0"> 
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={logo.width} 
                  height={logo.height} 
                  className="object-contain"
                  style={{
                    width: Math.round(logo.width * 0.7),
                    height: Math.round(logo.height * 0.7),
                  }}
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