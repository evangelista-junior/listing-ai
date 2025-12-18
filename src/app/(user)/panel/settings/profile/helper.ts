import * as z from "zod";

export function getUserInitials(fullname: string) {
  if (fullname)
    return fullname.split(/\s+/).reduce((acc, c) => {
      let initial = c[0];
      return acc + initial;
    }, "");
}

export const ProfileFormScheme = z.object({
  name: z
    .string("Full name is required!")
    .refine((fn) => fn.trim().split(/\s+/).length >= 2, {
      error: "Please enter at least your first and last name!",
    }),
  email: z.email("Please provide a valid email!"),
  company: z.string().optional(),
});
export type ProfileFormType = z.infer<typeof ProfileFormScheme>;

export function isDifferentData(
  previous: ProfileFormType,
  current: ProfileFormType
) {
  return Object.keys(previous).some((k) => {
    const key = k as keyof ProfileFormType;
    return current[key] !== previous[key];
  });
}
