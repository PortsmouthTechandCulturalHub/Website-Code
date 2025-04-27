import React from "react";

import Content from "@/components/content/news-&-events/content";
import { getNewsAndEvents } from "@/contentful/request/get-news-and-events";

export const metadata = {
  title: "News and Events",
  description: "PORTSMOUTH TECH & CULTURAL HUB news and events",
};

export default async function NewsAndEvents() {
  const { newsAndEvents } = await getNewsAndEvents();

  return (
    <div className="flex w-full relative flex-col pt-sm-header min-h-[60dvh] sm:pt-header">
      <Content news={newsAndEvents} />
    </div>
  );
}
