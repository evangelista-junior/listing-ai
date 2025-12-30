import * as z from "zod";

export const BuildingFormSchema = z.object({
  fullName: z
    .string("Full name is required!")
    .refine((fn) => fn.trim().split(/\s+/).length >= 2, {
      error: "Please enter at least your first and last name!",
    }),
  email: z.email("Please provide a valid email!"),
});
export type BuildingFormType = z.infer<typeof BuildingFormSchema>;

export const LoginFormSchema = z.object({
  username: z.email("Please provide a valid email!"),
  password: z.string().min(1, "Password is required"),
  // .min(8, "Password must be at least 8 characters long"),
});
export type LoginFormType = z.infer<typeof LoginFormSchema>;

export const SignupFormSchema = z
  .object({
    full_name: z
      .string("Full name is required!")
      .refine((fn) => fn.trim().split(/\s+/).length >= 2, {
        error: "Please enter at least your first and last name!",
      }),
    email: z.email("Please provide a valid email!"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters long"),
    confirm_password: z
      .string()
      .min(1, "Confirm password is required")
      .min(8, "Confirm password must be at least 8 characters long"),
    consent: z.boolean().refine((at) => at === true, {
      error: "Please accpet the terms to register!",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
  });
export type SignupFormType = z.infer<typeof SignupFormSchema>;
