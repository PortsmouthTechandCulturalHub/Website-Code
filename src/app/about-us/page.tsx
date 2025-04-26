import React from "react";

import { hero, about } from "@/app/about-us/variables";
import Hero from "@/components/common/hero";
import Teams from "@/components/content/about-us/teams";
import WhoWeAre from "@/components/content/about-us/who-we-are";

export const metadata = {
  title: "About us",
  description: "PORTSMOUTH TECH & CULTURAL HUB: Cultivating Digital Talent Since 2024",
};

export default function AboutUs() {
  return (
    <div className="flex w-full flex-col pt-sm-header sm:pt-header">
      <Hero hero={hero} />
      <WhoWeAre about={about} />
      <Teams />
    </div>
  );
}
