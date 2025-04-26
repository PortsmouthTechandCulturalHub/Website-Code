import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

import { Contacts } from "@/app/contact-us/variables";

interface Props {
  contact: Contacts;
}

export default function ContactCard({ contact }: Props) {
  return (
    <div className="flex w-full flex-col gap-6 rounded-lg border border-gray-100 bg-white p-4 shadow-md">
      <div className="flex w-full flex-col gap-2">
        <h1 className="text-2xl font-bold text-black">Main office</h1>
        <h2 className="text-2xl font-medium text-black">
          {contact.mainOffice}
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-2">
          <MapPin size={24} className="fill-black text-white" />
          <p className="text-xl text-black">{contact.location}</p>
        </div>
        <div className="flex items-start gap-2">
          <Phone size={24} className="fill-black text-white" />
          <p className="text-xl text-black">{contact.phone}</p>
        </div>
        <div className="flex items-start gap-2">
          <Mail size={24} className="fill-black text-white" />
          <p className="text-xl text-black">{contact.mail}</p>
        </div>
      </div>
    </div>
  );
}
