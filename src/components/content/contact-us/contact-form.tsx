"use client";

import React from "react";
import { Controller } from "react-hook-form";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/text-area";
import useReactHookForm from "@/hooks/use-hooks-form";
import { contactSchema } from "@/validations/contact-us";


export default function ContactForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useReactHookForm(contactSchema, {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(async (data) => {
      console.log(data);
    })(e);
  };

  return (
    <form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
      <div className="grid w-full grid-cols-1 items-start gap-4 md:grid-cols-2">
        <Input
          label=""
          type="text"
          placeholder={`First Name`}
          varient="outline"
          {...register("firstName")}
          errorMessage={errors.firstName?.message}
          isInvalid={!!errors.firstName}
          isDisabled={isSubmitting}
        />
        <Input
          label=""
          type="text"
          placeholder={`Last Name`}
          varient="outline"
          {...register("lastName")}
          errorMessage={errors.lastName?.message}
          isInvalid={!!errors.lastName}
          isDisabled={isSubmitting}
        />
        <Input
          label=""
          type="email"
          placeholder={`Email address`}
          varient="outline"
          {...register("email")}
          errorMessage={errors.email?.message}
          isInvalid={!!errors.email}
          isDisabled={isSubmitting}
        />
        <Input
          label=""
          type="number"
          placeholder={`Phone Number`}
          varient="outline"
          {...register("phoneNumber")}
          errorMessage={errors.phoneNumber?.message}
          isInvalid={!!errors.phoneNumber}
          isDisabled={isSubmitting}
        />
      </div>
      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <Textarea
            placeholder="Enter your message"
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            errorMessage={errors.message?.message}
            isInvalid={!!errors.message}
            isDisabled={isSubmitting}
            variant="bordered"
          />
        )}
      />
      <Button
        type="submit"
        className="w-full"
        children="Submit"
        disabled={isSubmitting}
      />
    </form>
  );
}
