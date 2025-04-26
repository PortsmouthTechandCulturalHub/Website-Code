import Image from "next/image";
import React from "react";

interface Props {
  hero: HeroTypes;
}

export default function Hero({ hero }: Props) {
  return (
    <div className="relative flex h-[90dvh] max-h-[1500px] w-full justify-center">
      <Image {...hero.image} className="size-full object-cover" />
      <div className="absolute top-0 flex size-full items-end max-md:justify-center bg-black/30 p-pg">
        <div className="flex flex-col gap-3 bg-primary max-w-[700px] text-white rounded-lg border-2 border-white p-4">
          <h1 className="text-semibold md:text-4.5xl text-3xl leading-none uppercase">
           {hero.title}
          </h1>
          <p className="md:text-3xl text-xl font-normal">{hero.desc}</p>
        </div>
      </div>
    </div>
  );
}
