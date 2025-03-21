import Image from "next/image";
import React from "react";

import { HeroTypes } from "@/app/variables";

interface Props {
  hero: HeroTypes;
}

export default function Hero({ hero }: Props) {
  return (
    <div className="h-[90dvh] max-h-[1500px] w-full flex-col justify-center relative bg-tertiary/[0.03]">
      <Image {...hero.image} className="size-full object-cover" />
      <div className="absolute top-0 flex size-full items-end bg-gradient-to-t from-black/60 to-black/30 p-pg max-md:justify-center px-pg py-14">
        <div className="flex h-full flex-col items-center justify-center gap-4 md:items-start">
          <div className="w-fit border-b-3 border-primary py-2 pr-2 max-md:pl-2">
            <h2 className="text-nowrap pr-4 text-center text-xl font-semibold text-white md:text-left">
              {hero.salu}
            </h2>
          </div>
          <h1 className="max-w-[650px] text-center text-white text-6.5xl font-semibold capitalize leading-none md:text-left">
            {hero.title.split(" & ")[0]} &{" "}
            <span className="text-primary">{hero.title.split(" & ")[1]}</span>
          </h1>
          <p className="max-w-[730px] text-center text-xl font-medium text-white md:text-left">
            {hero.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
