import React from "react";

import Image from "next/image";

import HeaderNav from "@/components/header/header-nav";
import Button from "@/components/ui/button";
import MobileMenu from "./mobileMenu";

export default function Header() {
  return (
    <div className="fixed z-50 flex sm:h-header h-sm-header w-full items-center justify-between bg-white px-pg">
      <Image src="/images/logo.png" width={147} height={51} alt="Portsmouth" />
      <div className="max-md:hidden">
        <HeaderNav />
      </div>
      <div className="max-md:hidden">
        <Button children="Donate now" />
      </div>

      <MobileMenu />
    </div>
  );
}
