/* eslint-disable @next/next/no-img-element */
import React from "react";
import { XingIcon } from "./BookIcons";

const ClientFirstBookAuthor = () => {
  return (
    <section className="bg-[#FFFFFF] w-full px-4 md:px-8 xl:px-14 flex justify-center py-[60px] lg:py-[100px]">
      <div className="flex flex-col lg:flex-row items-center lg:items-center w-full max-w-[1320px] gap-[40px] lg:gap-[80px] xl:gap-[120px]">
        {/* Right Side: Text Content */}
        <div className="flex flex-col items-start w-full lg:max-w-[700px] flex-1">
          {/* Badge */}
          <div className="bg-[#F1F1F1] rounded-[54px] px-[14px] py-[4px] mb-[24px] inline-flex items-center justify-center">
            <span className="font-['Figtree',sans-serif] font-normal text-[16px] text-[#363435] leading-[170%] tracking-[-0.2px] whitespace-nowrap">
              Über den Autor
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['Inter',sans-serif] font-bold text-[36px] md:text-[48px] lg:text-[56px] text-[#19153B] leading-[1.1] tracking-[-1.5px] max-w-[600px] mb-[32px]">
            Clients First ist <br /> keine Methode. Es <br /> ist eine Haltung.
          </h2>

          {/* Paragraphs */}
          <div className="flex flex-col gap-[20px] w-full">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] lg:text-[18px] text-[#6d6e71] leading-[160%]">
              Philipp Juchli, Jahrgang, 1984, studierte International Relations
              & Governance an der Universität St. Gallen (HSG). Er verfügt über
              20 Jahre nationaler und internationaler Führungserfahrung – in
              beratender sowie coachender Funktion, aber auch als Leiter. Nach
              längeren Aufenthalten in Santiago de Chile und Neuseeland
              arbeitete er als Consultant einer Unternehmensberatungs-Boutique
              in Zollikon, Köln und Osnabrück.
            </p>

            <p className="font-['Inter',sans-serif] font-normal text-[16px] lg:text-[18px] text-[#6d6e71] leading-[160%]">
              Von 2020 bis 2024 wirkte er erfolgreich als COO der
              Wirtschaftskanzlei Kellerhals Carrard. Im Unternehmen mit 520
              Mitarbeitenden gelang es ihm, sechs kulturell verschiedene
              Standorte auf einen gemeinsamen Nenner zu bringen und
              Synergievorhaben in Rekordzeit umzusetzen. Seit 2024 wirkt er als geschäftsführender Gesellschafter des
              Unternehmens Millennial C.
            </p>
          </div>
        </div>
        {/* Left Side: Image & Writers Card */}
        <div className="relative w-full max-w-[454px] h-[570px] bg-gray-100 rounded-tr-[16px] rounded-bl-[16px] overflow-hidden shrink-0 flex flex-col justify-end items-start p-[14px]">
          {/* Background Image */}
          <img
            src="/patients-first-book-site/pju.png"
            alt="Philipp R. Juchli"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
          />

          {/* Writers Card */}
          <div className="relative z-10 flex flex-row items-center justify-between p-[16px] md:px-[20px] md:py-[16px] w-[396px] max-w-full min-h-[105px] bg-[#FFFFFF] rounded-[8px]">
            {/* Writers Name Info */}
            <div className="flex flex-col items-start gap-[8px]">
              <h3 className="font-['Inter',sans-serif] font-normal text-[28px] leading-[130%] tracking-[-0.5px] text-[#160C00]">
                Philipp R. Juchli
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[180%] text-[#160C00] opacity-80">
                Geschäftsführer Millennium-C
              </p>
            </div>

            {/* Social Handles */}
            <div className="flex flex-row items-start gap-[8px]">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/philipp-juchli-465b983b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-[48px] h-[48px] bg-[#EDEBF6] rounded-[8px] hover:bg-[#dcd8f0] transition-colors shrink-0"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.07 9.94 13.4 10.58 13 11.12V10.15H10.5V18.5H13V13.57C13 12.3 13.92 11.5 14.88 11.5C15.84 11.5 16.5 12.28 16.5 13.57V18.5H18.5ZM6.88 8.56A1.46 1.46 0 0 0 8.34 7.1A1.46 1.46 0 0 0 6.88 5.64A1.46 1.46 0 0 0 5.42 7.1A1.46 1.46 0 0 0 6.88 8.56ZM5.5 18.5H8.25V10.15H5.5V18.5Z"
                    fill="#190D00"
                  />
                </svg>
              </a>
              {/* Xing */}
              <a
                href="https://www.xing.com/profile/Philipp_Juchli098724/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-[48px] h-[48px] bg-[#EDEBF6] rounded-[8px] hover:bg-[#dcd8f0] transition-colors shrink-0"
              >
                <XingIcon className="w-6 h-6 text-[#190D00]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFirstBookAuthor;
