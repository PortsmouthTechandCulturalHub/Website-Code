import React from "react";

import { teams } from "@/app/about-us/variables";
import SectionTitle from "@/components/common/section-title";

export default function Teams() {
  return (
    <div className="flex w-full flex-col gap-8 px-pg pb-14 pt-7">
      <SectionTitle childern="Meet our team" />
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
        {teams.map((item) => (
          <div
            key={item.id}
            className="w-full overflow-hidden rounded-lg bg-white"
          >
            <div className="aspect-5/3 w-full rounded-lg bg-gray-200"> </div>
            <div className="flex flex-col justify-between gap-4 py-3">
              <div className="w-full flex-col gap-1">
                <h1 className="text-lg font-bold capitalize text-black">
                  {item.name}
                </h1>
                <p className="text-lg font-normal capitalize text-black">
                  {item.pos}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
