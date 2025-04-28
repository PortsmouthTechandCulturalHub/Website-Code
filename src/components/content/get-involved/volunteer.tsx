import Image from "next/image";
import React from "react";

import { Volunteer as VolunteerTypes } from "@/app/get-involved/variables";
import SectionParagraph from "@/components/common/section-paragraph";
import VolunteerForm from "@/components/content/get-involved/volunteer-form";

interface Props {
  content: VolunteerTypes;
}

function Volunteer({ content }: Props) {
  return (
    <div className="flex w-full flex-col gap-8 px-pg pb-7 pt-14">
      <SectionParagraph item={content} />
      <div className="flex max-lg:flex-col w-full items-center gap-16 pb-12">
        <div className="lg:aspect-3/4 aspect-4/3 w-full flex-1 overflow-hidden rounded-2xl bg-gray-100">
          <Image
            {...content.volunteerForm.image}
            className="size-full object-cover object-[0%_20%]"
          />
        </div>
        <div className="flex flex-1 flex-col gap-8">
          <div className="flex w-full items-center gap-4">
            <hr className="w-[50px] bg-gray-500" />
            <span className="text-2xl text-gray-500">Volunteer</span>
          </div>
          <div>
            <h1 className="sm:text-4xl text-2xl font-bold text-black">
              {content.volunteerForm.title}
            </h1>
            <p className="mt-4 sm:text-lg font-normal text-black">
              {content.volunteerForm.subTitle}
            </p>
          </div>
          <VolunteerForm />
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
