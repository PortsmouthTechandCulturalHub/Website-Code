"use client";

import React from "react";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import useReactHookForm from "@/hooks/use-hooks-form";
import { volunteerSchema } from "@/validations/volunteer";

export default function VolunteerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useReactHookForm(volunteerSchema, {
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    volunterType: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(async (data) => {
      console.log(data);
    })(e);
  };

  return (
    <form
      className="flex w-full flex-col gap-4 rounded-lg border border-gray-200 p-4"
      onSubmit={onSubmit}
    >
      <div className="grid w-full grid-cols-1 items-start gap-4 md:grid-cols-2">
        <Input
          label=""
          type="text"
          placeholder={`Name`}
          varient="outline"
          {...register("name")}
          errorMessage={errors.name?.message}
          isInvalid={!!errors.name}
          isDisabled={isSubmitting}
        />
        <Input
          label=""
          type="text"
          placeholder={`Your address`}
          varient="outline"
          {...register("address")}
          errorMessage={errors.address?.message}
          isInvalid={!!errors.address}
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
      </div>
      <Input
        label=""
        type="text"
        placeholder={`Volunteer type`}
        varient="outline"
        {...register("volunterType")}
        errorMessage={errors.volunterType?.message}
        isInvalid={!!errors.volunterType}
        isDisabled={isSubmitting}
      />
      <Button
        type="submit"
        className="w-full mt-8 uppercase"
        children="Volunteer now"
        disabled={isSubmitting}
      />
    </form>
  );
}
