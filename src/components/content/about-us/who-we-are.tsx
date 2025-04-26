import Image from "next/image";
import React from "react";

import { AboutTypes } from "@/app/about-us/variables";
import SectionParagraph from "@/components/common/section-paragraph";
import SectionTitle from "@/components/common/section-title";

interface Props {
  about: AboutTypes;
}

export default function WhoWeAre({ about }: Props) {
  return (
    <div className="flex w-full flex-col gap-8 px-pg pb-7 pt-14">
      <SectionParagraph item={about.content} />
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
        {about.qlt.map((item) => (
          <div
            key={item.id}
            className="flex w-full flex-col items-center justify-center gap-2 rounded-lg p-12 transition-colors hover:bg-gray-100"
          >
            <Image {...item.icon} />
            <h1 className="text-3xl font-semibold text-black">{item.title}</h1>
            <p className="text-center text-lg font-normal text-gray-700">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
