"use client";

import Image from "next/image";
import {useCallback } from "react";
import React from "react";

import { cn } from "@/lib/utils";

interface Props {
  hero: HeroTypes;
  textOverlayVarient?: "filled" | "flat";
  overlayClassName?: string;
}

export default function Hero({
  hero,
  textOverlayVarient = "filled",
  overlayClassName,
}: Props) {
  const renderTextOverlay = useCallback(() => {
    switch (textOverlayVarient) {
      case "flat":
        return (
          <div className="mx-auto my-auto max-w-[800px]">
            <p className="text-center text-4xl font-bold capitalize text-white md:text-6xl">
              {hero.desc}
            </p>
          </div>
        );
      default:
        return (
          <div className="absolute bottom-[10%] mr-[5%] flex max-w-[700px] flex-col gap-3 rounded-lg border-2 border-white bg-primary p-4 text-white">
            {hero.title && (
              <h1 className="text-semibold text-3xl uppercase leading-none md:text-4.5xl">
                {hero.title}
              </h1>
            )}
            <p className="text-xl font-normal md:text-3xl">{hero.desc}</p>
          </div>
        );
    }
  }, [textOverlayVarient, hero.title, hero.desc]);

  return (
    <div className="relative flex h-[90dvh] max-h-[1500px] w-full justify-center">
      <Image
        {...hero.image}
        className="size-full object-cover object-[0%_20%]"
      />
      <div
        className={cn(
          "absolute top-0 flex size-full bg-black/40 p-pg",
          overlayClassName,
        )}
      >
        {renderTextOverlay()}
      </div>
    </div>
  );
}
