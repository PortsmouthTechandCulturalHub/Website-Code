import Image from "next/image";
import Link from "next/link";
import React from "react";

import FooterNav from "@/components/footer/footer-nav";
import Subscribe from "@/components/footer/subscribe";
import { SOCIALS } from "@/contants";


export default function Footer() {
  return (
    <div className="w-full flex lg:flex-row flex-col-reverse gap-14 bg-primary px-pg py-16">
      <div className="flex flex-1 flex-col justify-center max-lg:items-center lg:gap-14 gap-7">
        <h1 className="text-sm max-lg:text-center font-medium text-white">
          Copyright &copy; 2020 Portsmouth Tech & Cultural Hub Itd. <br /> All
          rights reserved
        </h1>
        <div className="flex gap-6">
          {SOCIALS.map((item) => (
            <Link href={item.link} key={item.image.alt} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <div className="flex size-8 items-center justify-center rounded-full bg-white/10">
                  <Image {...item.image} />
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-1 max-sm:flex-col-reverse justify-between gap-12">
        <FooterNav />
        <Subscribe />
      </div>
    </div>
  );
}
