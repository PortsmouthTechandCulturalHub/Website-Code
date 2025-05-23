import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Values as ValuesTypes } from "@/app/variables";
import SectionTitle from "@/components/common/section-title";

interface Props {
  value: ValuesTypes;
}

export default function Values({ value }: Props) {
  return (
    <div className="flex w-full flex-col gap-8 px-pg pb-7 pt-14">
      <h2 className="max-w-full text-center text-xl font-medium text-gray-600 md:max-w-[1100px] md:text-left">
        {value.desc}
      </h2>
      <div className="flex w-full flex-col gap-12">
        <SectionTitle childern="Our values" />
        <div className="flex w-full flex-wrap gap-4 md:flex-row">
          {value.values.map((item) => (
            <div
              key={item.id}
              className="flex min-w-[350px] flex-1 items-start gap-3 rounded-lg bg-primary p-5"
            >
              <div className="flex size-10 flex-none items-center justify-center rounded-md bg-secondary">
                <Image {...item.icon} />
              </div>
              <div className="flex flex-col gap-2 text-white">
                <h1 className="text-2xl font-bold capitalize leading-none">
                  {item.title}
                </h1>
                <p className="text-base font-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative w-full px-0 md:px-10">
          <VideoContent value={value} />
        </div>
      </div>
    </div>
  );
}

const VideoContent = ({ value }: { value: ValuesTypes }) => (
  <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg bg-gray-100">
    <Image
      src={value.videoThumbnail}
      width={1526}
      height={2048}
      alt="text-videothumb"
      className="size-full object-cover"
    />
    <VideoCtrlButton />
  </div>
);

export const VideoCtrlButton = () => (
  <div className="absolute flex size-[52px] cursor-pointer items-center justify-center rounded-full bg-primary shadow-concentric">
    <Play className="fill-white stroke-white" />
  </div>
);
