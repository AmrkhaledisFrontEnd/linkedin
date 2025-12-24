import z from "zod";
// =====================================================
export const LoginSchema = z.object({
  email: z
    .string()
    .min(5, { message: "Email must be at least 5 characters long" })
    .max(100, { message: "Email must be less than 100 characters" })
    .email({ message: "Please enter a valid email address" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(80, { message: "The password is too big" }),
});
