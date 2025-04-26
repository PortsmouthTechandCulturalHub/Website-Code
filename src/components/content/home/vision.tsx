import React from "react";

import { Vision as VisionTypes } from "@/app/variables";
import SectionTitle from "@/components/common/section-title";

interface Props {
  vision: VisionTypes[];
}

export default function Vision({ vision }: Props) {
  return (
    <div className="flex w-full flex-col gap-8 px-pg pb-14 pt-7">
      <SectionTitle childern="Vision" />
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-2">
        {vision.map((item) => (
          <div
            key={item.id}
            className="flex w-full flex-col items-center justify-center gap-2 rounded-lg bg-primary p-12"
          >
            <h1 className="text-2xl font-bold text-white">{item.title}</h1>
            <p className="text-center text-lg font-normal text-white">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
