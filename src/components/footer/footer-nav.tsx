"use client";

import React from "react";

import { NAV, SERVICIES } from "@/contants/nav";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function FooterNav() {
  const pathname = usePathname();
  return (
    <div className="flex gap-12">
      <div className="flex flex-col gap-2">
        <h1 className="pb-4 text-xl font-semibold capitalize text-white">
          Company
        </h1>
        {NAV.map((item) => (
          <Link key={item.title} href={item.link} className="outline-none">
            <h1
              className={cn(
                "text-nowrap text-base font-normal capitalize text-white transition-colors-opacity hover:opacity-80",
                pathname === item.link && "font-medium text-secondary",
              )}
            >
              {item.title}
            </h1>
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="pb-4 text-xl font-semibold capitalize text-white">
          Services
        </h1>
        {SERVICIES.map((item) => (
          <Link key={item.title} href={item.link} className="outline-none">
            <h1
              className={cn(
                "text-nowrap text-base font-normal capitalize text-white transition-colors-opacity hover:opacity-80",
                pathname === item.link && "font-medium text-secondary",
              )}
            >
              {item.title}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}
