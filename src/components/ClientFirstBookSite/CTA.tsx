"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

const CTA = () => {
  return (
    <section className="w-full bg-[#FEFEFE] py-[93px] flex justify-center">
      
      {/* CONTAINER */}
      <div className="w-full max-w-[1360px] mx-auto flex flex-col lg:flex-row gap-[30px] px-4 xl:px-0 items-stretch">

        {/* LEFT */}
        <div
          className="w-full lg:w-[681px] h-full bg-[rgba(87,71,164,0.8)]
          p-[44px] flex flex-col gap-[25px]
          rounded-[16px] lg:rounded-none lg:rounded-tr-[16px] lg:rounded-bl-[16px]"
        >
          {/* Badge */}
          <div className="bg-[#E1DAFF] px-[14px] py-[4px] rounded-full w-fit">
            <span className="text-[16px] text-[#6D6E72] leading-[170%]">
              Clients First
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-white text-[35px] leading-[100%] tracking-[-0.03em]">
            Wie Sie den Mythos Fachkräftemangel <br />
            überwinden und den Unternehmens- erfolg sichern
          </h2>

          {/* Meta */}
          <p className="text-[#D8D8D8] text-[18px] leading-[120%]">
            Philipp R. Juchli
            <br /><br />
            Wirtschaft & Management
            <br /><br />
            Paperback
            <br />
            164 Seiten
            <br />
            ISBN-13: 9783769392340
            <br />
            Verlag: BoD - Books on Demand
            <br />
            Erscheinungsdatum: 12.11.2025
            <br />
            Sprache: Deutsch
            <br />
            Schlagworte: Unternehmen Firma Management Führung Führungskraft
            Leadership, Führungskräfteentwicklung Managementstrategie
            Führungsansätze
          </p>

          {/* Button */}
          <a
            href="https://buchshop.bod.de/clients-first-philipp-r-juchli-9783769392340"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-[331px] h-[55px] bg-white rounded-[16px] px-[16px] pr-[8px] shadow-lg group"
          >
            <span className="text-[16px] text-[#1B1B1D]">
              Buch kaufen bei BookOnDemand
            </span>

            <div className="w-[38px] h-[38px] bg-[#F3F3F3] rounded-[12px] flex items-center justify-center">
              <ShoppingCart size={18} />
            </div>
          </a>
        </div>

      {/* RIGHT */}
<div
  className="w-full lg:w-[649px] h-full flex items-center justify-center
  rounded-[16px] lg:rounded-none lg:rounded-tr-[16px] lg:rounded-bl-[16px] overflow-hidden"
>
  <div className="relative w-full h-full min-h-[600px]">
    <Image
      src="/client-first-book-site/Book picture.png"
      alt="Clients First Book"
      fill
      className="object-cover"
      priority
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default CTA;