// src/components/content/news-&-events/content.tsx

import { format } from "date-fns"; // External libraries, no empty line between them
import { Calendar } from "lucide-react";
import Image from "next/image";   // Next.js specific
import Link from "next/link";     // Link before React (as per specific rule for this file)
import React from "react";       // React after Link (as per specific rule for this file)

import EmptyContent from "@/components/common/empty-content"; // Separate group for local aliases
import Button from "@/components/ui/button";
// import Pagination from "@/components/ui/pagination"; // This line is commented out, so it doesn't affect import order issues

interface Props {
  news: NewsAndEvent[];
}

export default function Content({ news }: Props) {
  return (
    <>
      {news.length > 0 ? (
        <div className="flex w-full flex-col gap-14 px-pg py-14">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 4kScreen:grid-cols-3">
            {news.map((item) => (
              <div
                key={item.sys.id}
                className="flex w-full flex-col gap-4 rounded-lg border border-gray-100 p-4"
              >
                <div className="flex w-full flex-col gap-3">
                  <div className="aspect-5/3 w-full overflow-hidden rounded-lg bg-gray-100">
                    {item.coverImage.src && (
                      <Image
                        {...item.coverImage}
                        className="size-full object-cover sm:object-[0%_20%]"
                      />
                    )}
                  </div>
                  <div className="flex w-full justify-between gap-4">
                    <h2 className="capitalize sm:text-lg">{`By ${item.author}`}</h2>
                    <div className="flex w-fit items-center gap-2">
                      <Calendar size={18} />
                      <time className="text-nowrap sm:text-lg">
                        {format(new Date(item.publishDate), "PPP")}
                      </time>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-4">
                  <h1 className="line-clamp-2 text-lg font-semibold sm:text-xl">
                    {item.title}
                  </h1>

                  
                  <p className="line-clamp-2 sm:text-lg">{item.description}</p>

                 <Link href={`/news/${item.sys.id}`}>
                    <Button className="text-white bg-primary hover:bg-secondary px-6 py-2 rounded-md text-base font-medium transition">
                      Read more
                    </Button>
                  </Link>


                </div>
              </div>
            ))}
          </div>
          {/* <div className="flex w-full justify-center">
        <Pagination />
      </div> */}
        </div>
      ) : (
        <EmptyContent text="No news or upcoming events" />
      )}
    </>
  );
}