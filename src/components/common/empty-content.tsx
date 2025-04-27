import React from "react";

interface Props {
  text: string;
}
function EmptyContent({ text }: Props) {
  return (
    <div className="my-auto w-full mx-auto max-w-[400px]">
      <p className="font-semibold capitalize text-center text-lg sm:text-2xl">{text}</p>
    </div>
  );
}

export default EmptyContent;
