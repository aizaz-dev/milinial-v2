import React from 'react'
import Image from 'next/image'

export const BookPromo: React.FC = () => {
  return (
    <div className="container flex justify-center mt-0 px-4 md:px-8">
      <div
        className="flex w-full relative overflow-hidden max-w-[1375px] min-h-[400px] md:min-h-[600px] bg-[#0B0332CC] rounded-tr-[16px] rounded-bl-[16px] px-6 md:px-12"
      >
        <div
          className="flex flex-col lg:flex-row items-center w-full z-10 gap-[30px]"
        >
          {/* Left Content */}
          <div className="flex flex-col flex-1 items-start md:items-start py-10 lg:py-0 w-full text-left">
            <div
              className="inline-flex items-center justify-center mb-6 md:mb-8 w-fit min-w-[202px] h-[35px] pt-[4px] pr-[14px] pb-[4px] pl-[10px] gap-1 bg-[#D6CDFE] rounded-[54px] font-['Figtree',sans-serif] font-normal text-[14px] md:text-base leading-[170%] tracking-[-0.2px] text-[#6D6E72]"
            >
              Jetzt im Handel erhältlich
            </div>

            <h2
              className="mb-4 md:mb-6 capitalize font-sans font-bold text-[36px] sm:text-[42px] md:text-[56px] leading-[1.2] md:leading-none tracking-[-0.03em] text-white"
            >
              Bessere Führung.<br />
              Stärkere Teams.<br />
              Erfolgreichere Kliniken.
            </h2>

            <p
              className="max-w-[550px] font-sans font-medium text-[16px] md:text-[18px] leading-[140%] md:leading-[120%] text-[#D8D8D8]"
            >
              Unser aktuelles Buch &quot;Patience First&quot; zeigt, wie Sie als Arzt Führung leben, Ihr Team nachhaltig für sich gewinnen und den Klinik-Erfolg langfristig sichern.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center items-center h-full min-h-[250px] md:min-h-[400px] lg:min-h-full pb-8 md:pb-0">
            <Image
              src="/blog/right-book.png"
              alt="Patience First Book"
              width={700}
              height={700}
              className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[500px] xl:max-w-[700px] object-contain md:scale-[1.15] origin-center md:origin-right transform"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
