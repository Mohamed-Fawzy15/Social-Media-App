import z from "zod";

export const signUpSchema = {
  body: z.object({
    name: z.string().min(5).trim(),
    email: z.email(),
    password: z
      .string()
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/),
    cPassword: z.string(),
  }),
};
