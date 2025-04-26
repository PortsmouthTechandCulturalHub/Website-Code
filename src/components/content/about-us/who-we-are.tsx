import Image from "next/image";
import React from "react";

import { AboutTypes } from "@/app/about-us/variables";
import SectionParagraph from "@/components/common/section-paragraph";

interface Props {
  about: AboutTypes;
}

export default function WhoWeAre({ about }: Props) {
  return (
    <div className="flex w-full flex-col gap-8 px-pg pb-7 pt-14">
      <SectionParagraph item={about.content} />
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
        {about.qlt.map((item) => (
          <div
            key={item.id}
            className="flex w-full flex-col items-center  gap-2 rounded-lg p-12 transition-colors bg-gray-100"
          >
            <div className="flex w-full items-center gap-4">
              <Image {...item.icon} className="h-fit w-8" />
              <h1 className="text-3xl font-bold text-black">
                {item.title}
              </h1>
            </div>
            {
              <ul className="flex list-decimal mt-1 flex-col gap-1.5 pl-6">
                {item.list.map((ls) => (
                  <li key={ls}>
                    <p className="text-lg font-normal text-gray-700">{ls}</p>
                  </li>
                ))}
              </ul>
            }
          </div>
        ))}
      </div>
    </div>
  );
}
