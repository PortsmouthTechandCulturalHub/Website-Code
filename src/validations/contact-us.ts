import * as z from "zod";

export const contactSchema = z
  .object({
    firstName: z.string().trim().min(2, "This is a required field."),
    lastName: z.string().trim().min(2, "This is a required field."),
    email: z.string().trim().email("Please enter a valid email address"),
    phoneNumber: z
      .string()
      .trim()
      .min(1, "Phone number is required.")
      .min(10, "Phone number must be at least 10 digits.")
      .regex(
        /^(\+?([0-9]{1,3})[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
        "Please enter a valid phone number",
      )
      .refine((val) => {
        const digits = val.replace(/[^\d]/g, "");
        return digits.length >= 10 && digits.length <= 15;
      }, "Phone number must be 10-15 digits."),
    message: z
      .string()
      .min(1, "This is a required field.")
      .max(1000, "Message cannot exceed 1000 characters."),
  })
  .strict();

export type ContactSchema = z.infer<typeof contactSchema>;
