"use client";

import { useInput } from "@heroui/react";
import { X } from "lucide-react";
import React, { forwardRef } from "react";
import { FieldError } from "react-hook-form";

const varients = {
  flat: {
    input: [
      "!text-white text-base font-medium placeholder:!font-normal",
      "placeholder:text-white/60",
      "data-[has-end-content=true]:pr-2",
      "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
    ],
    errorMessage: "text-red-500 text-base",
    inputWrapper: [
      "rounded-md shadow-none h-12 ring-0",
      "!bg-white/20 data-[hover=true]:bg-white/20 group-data-[focus=true]:bg-white/20",
      "data-[focus=true]:!bg-white data-[focus=true]:bg-white! group-data-[focus=true]:border-primary group-data-[focus-visible=true]:ring-0 group-data-[invalid=true]:border-red-500 group-data-[invalid=true]:bg-white",
      "cursor-text!",
    ],
  },

  outline: {
    input: [
      "!text-black text-base font-medium placeholder:!font-normal",
      "placeholder:text-gray-200",
      "data-[has-end-content=true]:pr-2",
      "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
    ],
    errorMessage: "text-red-500 text-base",
    inputWrapper: [
      "rounded-md shadow-none h-12 ring-0",
      "!bg-white data-[hover=true]:bg-white border-1.5 border-gray-300",
      "group-data-[focus=true]:bg-white group-data-[focus=true]:border-primary group-data-[focus-visible=true]:ring-0 group-data-[invalid=true]:border-red-500 group-data-[invalid=true]:!bg-white",
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
  isInvalid?: boolean;
  isReadOnly?: boolean;
  description?: string;
  errorMessage?: FieldError["message"];
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
