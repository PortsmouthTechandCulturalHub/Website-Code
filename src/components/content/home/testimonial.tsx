import React from "react";

import SectionTitle from "@/components/common/sectionTitle";
import { Testimonial as TestimonialTypes } from "@/app/variables";

interface Props {
  testimonial: TestimonialTypes[];
}

export default function Testimonial({testimonial}: Props) {
  return (
    <div className="flex w-full flex-col gap-8 px-pg pb-14 pt-7">
      <SectionTitle childern="Testimonial" />
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
        {testimonial.map((item) => (
          <div
            key={item.id}
            className="flex w-full flex-col items-center justify-center gap-2 rounded-lg bg-primary p-12"
          >
            <h1 className="text-lg font-bold text-white">
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
