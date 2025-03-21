import React from "react";

import { HeroTypes } from "@/app/variables";


interface Props {
  hero: HeroTypes;
}

export default function Hero({ hero }: Props) {
  return (
    <div className="grid h-[90dvh] min-h-fit max-h-[1500px] py-14 w-full grid-cols-1 gap-8 flex-col justify-center bg-tertiary/[0.03] px-pg md:grid-cols-2">
      <div className="flex h-full flex-col md:items-start items-center justify-center gap-4">
        <div className="w-fit border-b-3 border-primary py-2 max-md:pl-2 pr-2">
          <h2 className="text-nowrap md:text-left text-center pr-4 text-xl font-semibold text-gray-900">
            {hero.salu}
          </h2>
        </div>
        <h1 className="max-w-[650px] md:text-left text-center text-6.5xl font-semibold capitalize leading-none">
          {hero.title.split(" & ")[0]} &{" "}
          <span className="text-primary">{hero.title.split(" & ")[1]}</span>
        </h1>
        <p className="max-w-[730px] md:text-left text-center text-xl font-medium text-gray-600">
          {hero.desc}
        </p>
      </div>
      <div className="flex items-center justify-end">
        <div className="md:aspect-3/4 md:w-[390px] w-full aspect-5/3 rounded-lg bg-gray-100"></div>
      </div>
    </div>
  );
}
