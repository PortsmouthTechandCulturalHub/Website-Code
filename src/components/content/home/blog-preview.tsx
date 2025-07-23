"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

import SectionTitle from "@/components/common/section-title";
import Button from "@/components/ui/button";



interface Props {
  blogs: Blog[];
}

export default function BlogPreview({ blogs }: Props) {
  return (
    <>
      {blogs.length > 0 && (
        <div className="flex w-full flex-col gap-8 px-pg py-7">
          <SectionTitle childern="Blogs" />
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {blogs.map((item) => (
              <div
                key={item.sys.id}
                className="w-full overflow-hidden rounded-lg bg-white shadow-md"
              >
                <div className="aspect-5/3 w-full overflow-hidden bg-gray-200">
                  {item.coverImage?.src && (
                    <Image
                      {...item.coverImage}
                      className="size-full object-cover sm:object-[0%_20%]"
                      alt={item.title}
                    />
                  )}
                </div>
                <div className="flex flex-col justify-between gap-4 p-3">
                  <div className="w-full flex-col gap-2">
                    <h1 className="text-lg font-bold text-black">
                      {item.title}
                    </h1>
                    <p className="text-lg font-normal text-black">
                      {item.description}
                    </p>
                  </div>
                  <Link href={`/blog/${item.sys.id}`}>
                    <Button>Read more</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}