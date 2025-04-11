import { Textarea as HerouiTextarea, TextAreaProps } from "@heroui/react";
import { forwardRef } from "react";

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
      "rounded-md w-full shadow-none ring-0",
      "!bg-white/20 data-[hover=true]:bg-white/20 group-data-[focus=true]:bg-white/20",
      "data-[focus=true]:!bg-white data-[focus=true]:bg-white! group-data-[focus=true]:border-primary group-data-[focus-visible=true]:ring-0 group-data-[invalid=true]:border-red-500 group-data-[invalid=true]:bg-white",
      "cursor-text!",
    ],
    innerWrapper: ["min-h-32"],
  },

  bordered: {
    input: [
      "!text-black text-base font-medium placeholder:!font-normal",
      "placeholder:text-gray-200",
      "data-[has-end-content=true]:pr-2",
      "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
    ],
    errorMessage: "text-red-500 text-base",
    inputWrapper: [
      "rounded-md w-full shadow-none ring-0",
      "!bg-white data-[hover=true]:bg-white border-1.5 border-gray-300",
      "group-data-[focus=true]:bg-white group-data-[focus=true]:border-primary group-data-[focus-visible=true]:ring-0 group-data-[invalid=true]:border-red-500 group-data-[invalid=true]:!bg-white",
      "cursor-text!",
    ],
    innerWrapper: ["min-h-32"],
  },
  faded: {
    input: ["text-black", "placeholder:text-gray-700"],
    inputWrapper: ["bg-transparent data-[hover=true]:bg-transparent"],
  },
  underlined: {
    input: ["text-black", "placeholder:text-gray-700"],
    inputWrapper: ["bg-transparent data-[hover=true]:bg-transparent"],
  },

  default: {
    input: ["text-black", "placeholder:text-gray-700"],
    inputWrapper: ["bg-transparent data-[hover=true]:bg-transparent"],
  },
};

interface Props extends TextAreaProps {
  customProp?: any;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ variant = "bordered", ...props }, ref) => {
    return (
      <HerouiTextarea
        className="w-full"
        variant="bordered"
        classNames={varients[variant]}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";

export default Textarea;
