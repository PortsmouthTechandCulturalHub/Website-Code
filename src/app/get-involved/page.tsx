import React from "react";

import { hero, volunteer } from "@/app/get-involved/variables";
import Hero from "@/components/common/hero";
import Volunteer from "@/components/content/get-involved/volunteer";

export const metadata = {
  title: "Get involved",
  description: "Empower change with your contribution",
};

export default function AboutUs() {
  return (
    <div className="flex w-full flex-col pt-sm-header sm:pt-header">
      <Hero
        textOverlayVarient="flat"
        hero={hero}
        overlayClassName="bg-black/60"
      />
      <Volunteer content={volunteer} />
    </div>
  );
}
