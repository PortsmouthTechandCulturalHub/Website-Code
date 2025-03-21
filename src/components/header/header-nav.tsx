"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { NavType, NAV } from "@/contants/nav";
import { cn } from "@/lib/utils";

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <div className="flex sm:flex-row flex-col items-center gap-6">
      {NAV.map((item: NavType) => (
        <Link key={item.title} href={item.link} className="outline-none">
          <h1
            className={cn(
              "text-nowrap text-base font-normal capitalize text-gray-800 transition-colors hover:text-secondary",
              pathname === item.link && "font-medium text-primary",
            )}
          >
            {item.title}
          </h1>
        </Link>
      ))}
    </div>
  );
}
