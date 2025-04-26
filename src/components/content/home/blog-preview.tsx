import React from "react";

import { Blog } from "@/app/variables";
import SectionTitle from "@/components/common/section-title";
import Button from "@/components/ui/button";

interface Props {
  blog: Blog[];
}
export default function BlogPreview({ blog }: Props) {
  return (
    <div className="flex w-full flex-col gap-8 px-pg py-7">
      <SectionTitle childern="Blogs" />
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {blog.map((item) => (
          <div
            key={item.id}
            className="w-full overflow-hidden rounded-lg bg-white shadow-md"
          >
            <div className="aspect-5/3 w-full bg-gray-200"> </div>
            <div className="flex flex-col justify-between gap-4 p-3">
              <div className="w-full flex-col gap-2">
                <h1 className="text-lg font-bold text-black">{item.title}</h1>
                <p className="text-lg font-normal text-black">{item.desc}</p>
              </div>
              <Button children="Read more" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
