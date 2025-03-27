"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { NavType, NAV } from "@/contants/nav";
import { cn } from "@/lib/utils";

interface Props {
  close?: () => void;
}

export default function HeaderNav({ close }: Props) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center gap-6 lg:flex-row">
      {NAV.map((item: NavType) => (
        <Link key={item.title} href={item.link} className="outline-none">
          <h1
            onClick={() => close?.()}
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
