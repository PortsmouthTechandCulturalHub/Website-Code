import Image from "next/image";
import React from "react";

import HeaderNav from "@/components/header/header-nav";
import MobileMenu from "@/components/header/mobileMenu";
import Button from "@/components/ui/button";

export default function Header() {
  return (
    <div className="fixed z-50 flex h-sm-header w-full items-center border-b border-gray-200 justify-between bg-white px-pg sm:h-header">
      <Image src="/images/logo.png" width={147} height={51} alt="Portsmouth" className="" />
      <div className="max-lg:hidden">
        <HeaderNav />
      </div>
      <div className="max-lg:hidden">
        <Button children="Donate now" />
      </div>

      <MobileMenu />
    </div>
  );
}
