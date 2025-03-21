import React from "react";

import SectionTitle from "@/components/common/section-title";

interface Props {
  item: SectionParagraph;
}

export default function SectionParagraph({ item }: Props) {
  return (
    <>
      <SectionTitle childern={item.title} />
      <p className="text-xl font-normal text-black">
        {item.content}
      </p>
    </>
  );
}
