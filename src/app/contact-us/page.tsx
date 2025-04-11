import React from "react";

import { contacts } from "@/app/contact-us/variables";
import ContactCard from "@/components/content/contact-us/contact-card";
import ContactForm from "@/components/content/contact-us/contact-form";

export default function ContactUs() {
  return (
    <div className="flex w-full flex-col gap-9 px-pg pb-14 pt-sm-header sm:px-[15%] sm:pt-header">
      <h1 className="pt-14 text-3xl font-semibold capitalize text-gray-800">
        Contact us
      </h1>
      <ContactCard contact={contacts} />
      <ContactForm />
    </div>
  );
}
