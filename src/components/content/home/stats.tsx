import Image from "next/image";
import React from "react";

import { Stat } from "@/app/variables";
import SectionTitle from "@/components/common/sectionTitle";

interface Props {
  stat: Stat[];
}

export default function Stats({ stat }: Props) {
  return (
    <div className="flex w-full flex-col gap-8 px-pg py-7">
      <SectionTitle childern="Lorem Ipsum is simply dummy text" />
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stat.map((item) => (
          <div
            key={item.id}
            className="flex w-full flex-col items-center justify-center gap-2 rounded-lg bg-primary p-12"
          >
            <Image {...item.image} />
            <h1 className="text-4.5xl font-semibold text-white">
              {item.title}
            </h1>
            <p className="text-center text-lg font-normal text-white">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
