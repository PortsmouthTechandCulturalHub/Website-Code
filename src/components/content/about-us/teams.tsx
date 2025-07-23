"use client";

import Image from "next/image";
import React, { useState } from "react";

import { teams } from "@/app/about-us/variables";
import SectionTitle from "@/components/common/section-title";



export default function Teams() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleBio = (id: number | string) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const getPreview = (text: string, wordLimit: number = 25) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <div className="flex w-full flex-col gap-8 px-pg pb-14 pt-7">
      <SectionTitle childern="Meet our team" />
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teams.map((item) => (
          <div
            key={item.id}
            className="w-full overflow-hidden rounded-xl bg-white shadow transition-shadow hover:shadow-lg"
          >
            {item.image?.src ? (
              <div className="relative aspect-square w-full overflow-hidden rounded-t-xl bg-gray-100">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="aspect-square w-full bg-gray-200" />
            )}

            <div className="flex flex-col justify-between gap-3 p-4">
              <div className="flex flex-col gap-1">
                <h1 className="text-lg font-bold capitalize text-black">
                  {item.name}
                </h1>
                <p className="text-base font-medium capitalize text-gray-800">
                  {item.pos}
                </p>
              </div>

              {item.bio && (
                <div className="text-sm text-gray-600 transition-all duration-300 ease-in-out">
                  <p
                    className={`overflow-hidden transition-all ${
                      expanded === item.id ? "max-h-96" : "max-h-20"
                    }`}
                  >
                   {(expanded === item.id ? item.bio : getPreview(item.bio))
  .split("\n\n")
  .map((para, idx) => (
    <p key={idx} className="mb-2">
      {para}
    </p>
))}
                  </p>
                  <button
                    onClick={() => toggleBio(item.id)}
                    className="mt-1 text-blue-600 hover:underline"
                  >
                    {expanded === item.id ? "Show less" : "Read more"}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
