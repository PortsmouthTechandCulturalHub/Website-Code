import React from "react";

import Content from "@/components/content/news-&-events/content";

import { news } from "./variable";

export default function NewsAndEvents() {
  return (
    <div className="flex w-full flex-col pt-sm-header sm:pt-header">
      <Content news={news} />
    </div>
  );
}
