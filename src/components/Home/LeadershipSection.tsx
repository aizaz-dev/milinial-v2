"use client";

import { ArrowUpRight } from "lucide-react";

export default function LeadershipSection() {
  return (
    <section className="w-full bg-[#F7F6F4] py-[120px] px-6">
      <div className="max-w-[980px] mx-auto text-center">

        {/* Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full border border-[#E5E5E5] text-[14px] text-[#555] bg-white mb-8">
          Warum Leadership?
        </div>

        {/* Heading - Updated with correct line-height */}
        <h2 className="text-[57px] leading-[60px] font-semibold text-[#1F1F1F] tracking-[-1.5px] mb-10">
          Mit Erfahrung und Methodik <br />
          zu Wirksamkeit mit unserem Führungs- <br />
          prinzip Leadership by Congruence
        </h2>
{/* Text Block */}
<div className="space-y-6 text-[18px] leading-[32px] text-[#555]">

  <p className="px-8 py-6 rounded-md">
    Unternehmern und Führungskräften wird heute alles abverlangt:
    Geopolitische Entwicklungen vorwegnehmen, Nachfolgeplanungen
    angehen, langjährig vernachlässigte Substanzwerte regenerieren und
    Strukturen verschlanken; zu geringen Kosten und überschaubaren
    Risiken für alle Stakeholder.
  </p>

  <p>
    Klassisches Management greift nicht mehr. Es führt zu Frustration
    mit untragbaren mikroökonomischen Schäden für das
    Gesamtunternehmen. Mit verheerenden Folgen.
  </p>

  <p>
    Mit unserer Unterstützung erhalten Sie in herausfordernden Zeiten
    die Fähigkeit zurück, Veränderungen sicher und erfolgreich
    umzusetzen.
  </p>

</div>

        {/* Button */}
        <div className="mt-12">
          <button className="inline-flex items-center gap-3 bg-[#2E0E8E] hover:bg-[#250A74] text-white text-[16px] font-medium px-7 py-4 rounded-lg transition">
            Mehr erfahren
            <ArrowUpRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}