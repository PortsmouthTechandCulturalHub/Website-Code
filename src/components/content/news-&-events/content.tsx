import { format } from "date-fns";
import { Calendar } from "lucide-react";
import React from "react";

import { News } from "@/app/news-&-events/variable";
import Button from "@/components/ui/button";
import Pagination from "@/components/ui/pagination";

interface Props {
  news: News[];
}
export default function Content({ news }: Props) {
  return (
    <div className="flex flex-col gap-14 px-pg py-14 w-full">
      <div className="4kScreen:grid-cols-3 gap-4 sm:grid-cols-2 grid w-full grid-cols-1">
        {news.map((item) => (
          <div
            key={item.id}
            className="flex w-full flex-col gap-4 rounded-lg border border-gray-100 p-4"
          >
            <div className="flex w-full flex-col gap-3">
              <div className="aspect-5/3 w-full rounded-lg bg-gray-100"></div>
              <div className="flex w-full justify-between gap-4">
                <h2 className="sm:text-lg capitalize">{`By ${item.author}`}</h2>
                <div className="flex w-fit items-center gap-2">
                  <Calendar size={18} />
                  <time className="sm:text-lg text-nowrap">
                    {format(new Date(item.date), "PPP")}
                  </time>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-4">
              <h1 className="line-clamp-2 sm:text-xl text-lg font-semibold">
                {item.title}
              </h1>
              <p className="line-clamp-2 sm:text-lg">{item.previewText}</p>
              <Button
                varient="light"
                className="!bg-white p-0 text-lg capitalize text-primary transition-colors hover:text-secondary"
                children="Read more ..."
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center">
        <Pagination />
      </div>
    </div>
  );
}
