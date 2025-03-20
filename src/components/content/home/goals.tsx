import { Goal } from "@/app/variables";
import SectionTitle from "@/components/common/sectionTitle";
import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  goal: Goal;
}

export default function Goals({ goal }: Props) {
  return (
    <div className="flex w-full flex-col gap-8 px-pg pt-14 pb-7">
      <h2 className="max-w-full text-center text-xl font-medium text-gray-600 md:max-w-[1100px] md:text-left">
        {goal.desc}
      </h2>
      <div className="flex w-full flex-col gap-12">
        <SectionTitle childern="Our goals" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {goal.goals.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3 rounded-lg bg-primary p-5"
            >
              <div className="flex size-10 flex-none items-center justify-center rounded-md bg-secondary"></div>
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
          <VideoContent goal={goal} />
        </div>
      </div>
    </div>
  );
}

const VideoContent = ({ goal }: { goal: Goal }) => (
  <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg bg-gray-100">
    <Image
      src={goal.videoThumbnail}
      width={512}
      height={385}
      alt="text-videothumb"
      className="size-full object-cover"
    />
    <VideoCtrlButton />
  </div>
);

export const VideoCtrlButton = () => (
  <div className="shadow-concentric absolute flex size-[52px] cursor-pointer items-center justify-center rounded-full bg-primary">
    <Play className="fill-white stroke-white" />
  </div>
);
