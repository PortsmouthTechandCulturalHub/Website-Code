/* eslint-disable */
// @ts-nocheck
"use client";


import { ReactNode } from "react";
import Image from "next/image";

import { Menu, X } from "lucide-react";

import Drawer from "@/components/ui/drawer";
import Button from "@/components/ui/button";
import HeaderNav from "./header-nav";

export default function MobileMenu() {
  return (
    <Drawer.Root>
      <Drawer.Trigger className="md:hidden -mr-2" varient="light" size="sm">
        <Menu className="text-primary" />
      </Drawer.Trigger>
      <Drawer.Content>
        {(onClose) => (
          <>
            <Drawer.Header className="flex justify-between gap-4">
              <Image
                src="/images/logo.png"
                width={147}
                height={51}
                alt="Portsmouth"
              />
              <Button
                onClick={onClose}
                varient="light"
                size="sm"
                children={<X />}
              />
            </Drawer.Header>
            <Drawer.Body className="gap-12">
              <HeaderNav />
              <Button children="Donate now" className="w-full" />
            </Drawer.Body>
          </>
        )}
      </Drawer.Content>
    </Drawer.Root>
  );
}
