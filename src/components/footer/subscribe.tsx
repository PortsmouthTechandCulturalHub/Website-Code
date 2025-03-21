import { Send } from "lucide-react";
import React from "react";

import Input from "@/components/ui/input";


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
        varient='flat'
      />
    </div>
  );
}
