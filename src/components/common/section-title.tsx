import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";


import { cn } from "@/lib/utils";

const sectionTitle = cva("border-l-3 border-primary px-2 uppercase", {
  variants: {
    varient: {
      solid: "font-semibold text-gray-800",
      light: "bg-white text-black hover:bg-gray-100",
    },
    size: {
      lg: "text-3xl",
      sm: "text-xl",
    },
  },

  defaultVariants: {
    varient: "solid",
    size: "lg",
  },
});

interface Props extends VariantProps<typeof sectionTitle> {
  childern?: ReactNode;
  className?: string;
}

export default function SectionTitle({
  varient,
  size,
  className,
  childern,
}: Props) {
  return (
    <h2 className={cn(sectionTitle({ varient, size }), className)}>
      {childern}
    </h2>
  );
}
