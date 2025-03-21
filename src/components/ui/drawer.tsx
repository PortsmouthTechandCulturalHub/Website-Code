'use client'

import {
  Drawer as HeroDrawer,
  DrawerContent as HeroDrawerContent,
  DrawerHeader as HeroDrawerHeader,
  DrawerBody as HeroDrawerBody,
  DrawerFooter as HeroDrawerFooter,
  useDisclosure,
} from "@heroui/react";
import { createContext, useContext, ComponentProps } from "react";

import Button, { ButtonProps } from "@/components/ui/button";

type DrawerContextType = ReturnType<typeof useDisclosure>;
const DrawerContext = createContext<DrawerContextType | null>(null);

function useDrawer() {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("Drawer subcomponents must be used within Drawer.Root");
  }
  return context;
}

const Drawer = {
  Root: function DrawerRoot({ children }: { children: React.ReactNode }) {
    const disclosure = useDisclosure();
    return (
      <DrawerContext.Provider value={disclosure}>
        {children}
      </DrawerContext.Provider>
    );
  },

  Trigger: function DrawerTrigger(props: ButtonProps) {
    const { onOpen } = useDrawer();
    return <Button onClick={onOpen} {...props} />;
  },

  Content: function DrawerContent({
    children,
    ...drawerProps
  }: {
    children: (onClose: () => void) => React.ReactNode | ((onClose: () => void) => React.ReactNode);
  } & Omit<ComponentProps<typeof HeroDrawer>, "isOpen" | "onOpenChange">) {
    const { isOpen, onOpenChange, onClose } = useDrawer();
    return (
      <HeroDrawer size="full" hideCloseButton={true} className="rounded-none" isOpen={isOpen} onOpenChange={onOpenChange} {...drawerProps}>
        <HeroDrawerContent>{typeof children === "function" ? children(onClose) : children}</HeroDrawerContent>
      </HeroDrawer>
    );
  },

  Header: function DrawerHeader(
    props: ComponentProps<typeof HeroDrawerHeader>,
  ) {
    return <HeroDrawerHeader className="sm:px-6 px-4" {...props} />;
  },

  Body: function DrawerBody(props: ComponentProps<typeof HeroDrawerBody>) {
    return <HeroDrawerBody className="sm:px-6 px-4" {...props} />;
  },

  Footer: function DrawerFooter(
    props: ComponentProps<typeof HeroDrawerFooter>,
  ) {
    return <HeroDrawerFooter {...props} />;
  },
};

export default Drawer
