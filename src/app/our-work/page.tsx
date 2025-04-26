import React from "react";

import { hero, getToKnow, work } from "@/app/our-work/variables";
import Hero from "@/components/common/hero";
import SectionParagraph from "@/components/common/section-paragraph";
import Works from "@/components/content/our-work/Works";

export const metadata = {
  title: "Our work",
  description: "Empowering Portsmouth and beyond with digital skills, creative tech, and community innovation",
};

export default function OurWork() {
  return (
    <div className="flex w-full flex-col pt-sm-header sm:pt-header">
      <Hero hero={hero} />
      <div className="flex w-full flex-col gap-8 px-pg pb-7 pt-14">
        <SectionParagraph item={getToKnow.content} />
      </div>
      <Works item={work} />
    </div>
  );
}
