"use client";

import { useInput } from "@heroui/react";
import { X } from "lucide-react";
import React, { forwardRef } from "react";

const styles = {
  label: "text-black/50 dark:text-white/90",
  input: [
    "text-base font-medium placeholder:!font-normal",
    "data-[has-end-content=true]:pr-2",
    "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
  ],
  innerWrapper: "bg-transparent",
  inputWrapper: [
    "!rounded-md h-fit",
    "focus-within:bg-default-200/50!",
    "dark:focus-within:bg-default/60!",
    "cursor-text!",
  ],
};

const varients = {
  flat: {
    input: [
      "text-white text-base font-medium placeholder:!font-normal",
      "placeholder:text-white/60",
      "data-[has-end-content=true]:pr-2",
      "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
    ],
    inputWrapper: [
      "rounded-md",
      "bg-white/20 data-[hover=true]:bg-white/20 group-data-[focus=true]:bg-white/20",
      "cursor-text!",
    ],
  },

  default: {
    input: ["text-black", "placeholder:text-gray-700"],
    inputWrapper: ["bg-transparent data-[hover=true]:bg-transparent"],
  },
};

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  isClearable?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  description?: string;
  errorMessage?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  labelPlacement?: "inside" | "outside" | "outside-left";
  classNames?: {
    base?: string;
    label?: string;
    input?: string | string[];
    innerWrapper?: string;
    inputWrapper?: string | string[];
    description?: string;
    errorMessage?: string;
  };
  varient?: keyof typeof varients;
  validate?: (value: string) => any;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ varient = "default", ...props }, ref) => {
    const {
      Component,
      label,
      domRef,
      description,
      isClearable,
      startContent,
      endContent,
      shouldLabelBeOutside,
      shouldLabelBeInside,
      errorMessage,
      getBaseProps,
      getLabelProps,
      getInputProps,
      getInnerWrapperProps,
      getInputWrapperProps,
      getDescriptionProps,
      getErrorMessageProps,
      getClearButtonProps,
    } = useInput({
      ref,
      classNames: {
        ...styles,
        ...varients[varient],
      },
      ...props,
    });

    const labelContent = <label {...getLabelProps()}>{label}</label>;

    const end = React.useMemo(() => {
      if (isClearable) {
        return <span {...getClearButtonProps()}>{endContent || <X />}</span>;
      }
      return endContent;
    }, [isClearable, getClearButtonProps, endContent]);

    const innerWrapper = React.useMemo(() => {
      if (startContent || end) {
        return (
          <div {...getInnerWrapperProps()}>
            {startContent}
            <input {...getInputProps()} />
            {end}
          </div>
        );
      }

      return <input {...getInputProps()} />;
    }, [startContent, end, getInputProps, getInnerWrapperProps]);

    return (
      <Component {...getBaseProps()}>
        {shouldLabelBeOutside ? labelContent : null}
        <div
          tabIndex={0}
          {...getInputWrapperProps()}
          role="button"
          onClick={() => {
            domRef.current?.focus();
          }}
          onKeyDown={() => {
            domRef.current?.focus();
          }}
        >
          {shouldLabelBeInside ? labelContent : null}
          {innerWrapper}
        </div>
        {description && <div {...getDescriptionProps()}>{description}</div>}
        {errorMessage && <div {...getErrorMessageProps()}>{errorMessage}</div>}
      </Component>
    );
  },
);

Input.displayName = "Input";

export default Input;
