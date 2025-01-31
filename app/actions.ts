"use server";

import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .email()
    .refine((email) => email.endsWith("@zod.com"), {
      message: "Only @zod.com emails are allowed",
    }),
  username: z.string().min(5, "Username should be at least 5 characters long"),
  password: z
    .string()
    .min(10, "Password should be at least 10 characters long")
    .refine((password) => /\d/.test(password), {
      message: "Password should contain at least one number",
    }),
});

export async function handleForm(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email") as string,
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  };

  const result = formSchema.safeParse(data);

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors;
    return {
      logined: false,
      errors: {
        email: fieldErrors.email || [],
        username: fieldErrors.username || [],
        password: fieldErrors.password || [],
      },
      values: data,
    };
  }

  return {
    logined: true,
    errors: {
      email: [],
      username: [],
      password: [],
    },
    values: data,
  };
}
