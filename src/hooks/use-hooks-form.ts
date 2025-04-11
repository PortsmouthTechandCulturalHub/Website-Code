import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn, DefaultValues } from "react-hook-form";
import * as z from "zod";

/**
 * A custom hook that combines React Hook Form with Zod schema validation
 * @param formSchema - The Zod schema to validate the form against
 * @param defaultValues - Optional default values for the form fields
 * @returns A React Hook Form instance with Zod validation
 */
const useReactHookForm = <T extends z.ZodFirstPartySchemaTypes>(
  formSchema: T,
  defaultValues?: DefaultValues<z.infer<T>>,
): UseFormReturn<z.infer<T>> =>
  useForm<z.infer<T>>({
    defaultValues,
    reValidateMode: "onChange",
    resolver: zodResolver<z.infer<T>>(formSchema),
  });

export default useReactHookForm;
