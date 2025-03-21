import { Input } from "@heroui/react";
import { Send } from "lucide-react";
import React from "react";


export default function Subscribe() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="pb-4 text-xl font-semibold capitalize text-white">
        Stay up to date
      </h1>
      <Input
        label=""
        type="email"
        placeholder={`Your email address`}
        endContent={<Send size={18} className="text-white" />}
        classNames={{
          inputWrapper:
            "!bg-white/20 !rounded-lg data-[hover=true]:bg-white/20",
          input:
            "!text-base overflow-hidden !font-medium placeholder:!font-normal placeholder:!text-white/60  !text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
        }}
      />
    </div>
  );
}
