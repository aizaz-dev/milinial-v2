import React from "react";
import type { Metadata } from "next/types";
import { BookPromo } from "@/components/BookPromo";
import { Memberships } from "@/components/Memberships";

import { getPayload } from "payload";
import configPromise from "@payload-config";
import RichText from "@/components/RichText";

export const revalidate = 600;

export default async function AGBPage() {
  const payload = await getPayload({ config: configPromise });
  const result = await payload.find({
    collection: "legal-pages",
    where: { slug: { equals: "agb" } },
    depth: 1,
  });

  const doc = result.docs[0];
  return (
    <div className="bg-white text-foreground">
      {/* ── HERO SECTION ── */}
      <div className="px-4 md:px-8 flex justify-center pt-[120px] lg:pt-[140px] pb-12">
        <div
          className="relative flex items-center justify-center overflow-hidden w-full max-w-[1320px] min-h-[400px] md:min-h-[585px] bg-cover bg-center rounded-tr-[16px] rounded-bl-[16px] px-6 md:px-12"
          style={{ backgroundImage: "url('/assets/legal-page/hero-bg.jpg')" }}
        >
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(61,53,97,0.75) 0%, rgba(106,75,250,0.45) 100%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center mx-auto gap-[30px] max-w-[892px]">
            {/* Badge */}
            <span
              className="inline-flex items-center px-4 py-1.5 rounded-full font-['Inter',sans-serif] text-[16px] leading-[170%] tracking-[-0.2px] text-white"
              style={{ background: "#7063AA" }}
            >
              Unser &quot;Kleingedrucktes&quot;
            </span>

            {/* Heading */}
            <h1 className="font-['Inter',sans-serif] font-medium text-[36px] md:text-[64px] leading-[110%] tracking-[-1px] md:tracking-[-3px] text-white m-0">
              {doc?.title || "Unsere AGB"}
            </h1>

            {/* Subheadline FIXED */}
            <p className="max-w-[794px] font-['Inter',sans-serif] font-light text-[22px] md:text-[40px] leading-[110%] tracking-[-2px] md:tracking-[-3px] text-white m-0">
              {doc?.subtitle ? doc.subtitle : (
                <>
                  Was Sie wissen sollten, bevor es losgeht:<br />Rechte, Pflichten &amp; Bedingungen
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="relative w-full bg-[#FEFEFE] flex justify-center py-[80px]">
        <div className="w-full max-w-[1440px] flex justify-start">
          <div
            className="
              w-full xl:w-[1284px]
              max-h-[75vh] xl:max-h-[1500px]
              overflow-y-auto

              [&::-webkit-scrollbar]:w-[8px]
              [&::-webkit-scrollbar-track]:bg-[#E5E7EB]
              [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-[#7063AA]
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:border-2
              [&::-webkit-scrollbar-thumb]:border-[#E5E7EB]

              [scrollbar-width:thin]
              [scrollbar-color:#7063AA_#E5E7EB]
            "
          >
            <div
              className="
                w-full max-w-[750px]
                mx-auto xl:mx-0 xl:ml-[345px]
                flex flex-col gap-[32px]
                px-6 xl:px-0
                pb-[120px]
              "
            >
              {doc?.lastUpdate && (
                <p className="text-[#6B7280] text-[14px] mb-[24px]">
                  Letztes Update:{" "}
                  {new Date(doc.lastUpdate).toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )}

              <h2 className="text-[30px] font-semibold text-[#333F51]">
                {doc?.title || "Unsere AGB"}
              </h2>

              {/* BODY */}
              <div className="flex flex-col gap-[32px] text-[#4C5157] text-[16px] leading-[28px]">
                {doc?.content ? (
                  <RichText
                    data={doc.content}
                    enableGutter={false}
                    enableProse={false}
                    className="prose max-w-none text-[#4C5157] text-[16px] leading-[28px] prose-headings:font-semibold prose-headings:text-[#333F51] prose-h3:text-[16px] prose-h3:mt-[32px] prose-h3:mb-[12px] prose-h2:mt-[32px] prose-h2:mb-[12px] prose-p:text-[#4C5157] prose-p:mt-0 prose-p:mb-[12px] first:prose-headings:mt-0"
                  />
                ) : (
                  <p>Inhalte werden geladen oder sind noch nicht verfügbar.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookPromo />
      <Memberships />
    </div>
  );
}

export function generateMetadata(): Metadata {
  return {
    title: "AGB | Millenial Group",
    description:
      "Was Sie wissen sollten – Rechte, Pflichten und Bedingungen im Überblick.",
  };
}
