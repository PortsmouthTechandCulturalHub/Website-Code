"use client";

import { useButton, Ripple, Spinner } from "@heroui/react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

const button = cva(
  "rounded-md font-medium capitalize w-fit text-md flex items-center justify-center outline-none transition-colors-opacity data-[pressed=true]:scale-[0.97] whitespace-nowrap overflow-hidden relative",
  {
    variants: {
      varient: {
        solid: "bg-primary hover:bg-secondary text-white hover:text-black",
        bordered: "border-1.5 border-primary text-primary",
        light: "bg-white text-black hover:bg-gray-100",
      },
      size: {
        sm: "size-11",
        md: "px-5 py-2.5",
        lg: "p-5",
      },
      disabled: {
        false: null,
        true: "opacity-60",
      },
    },

    defaultVariants: {
      varient: "solid",
      size: "md",
      disabled: false,
    },
  },
);

export interface ButtonProps
  extends VariantProps<typeof button>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  spinnerSize?: number | string;
  spinner?: React.ReactNode;
  spinnerPlacement?: "start" | "end";
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isLoading?: boolean;
  disableRipple?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ varient, size, disabled, ...props }, ref) => {
    const {
      domRef,
      children,
      spinnerSize,
      spinner = <Spinner color="current" size={spinnerSize} />,
      spinnerPlacement,
      startContent,
      endContent,
      isLoading,
      disableRipple,
      getButtonProps,
      getRippleProps,
    } = useButton({
      ref,
      disableRipple: true,
      ...(props as any),
    });

    const { ripples, onClear } = getRippleProps();

    return (
      <button
        ref={domRef}
        {...getButtonProps()}
        disabled={disabled}
        className={cn(button({ varient, size, disabled }), props.className)}
      >
        {startContent}
        {isLoading && spinnerPlacement === "start" && spinner}
        {children}
        {isLoading && spinnerPlacement === "end" && spinner}
        {endContent}
        {!disableRipple && <Ripple ripples={ripples} onClear={onClear} />}
      </button>
    );
  },
);

Button.displayName = "MyButton";

export default Button;
