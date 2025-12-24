import z from "zod";
import { RegisterSchema } from "../schemas/RegisterSchema";
import { LoginSchema } from "../schemas/LoginSchema";
// ===================================================================
export type RegisterActionDataType = z.infer<typeof RegisterSchema>
export type LoginActionDataType = z.infer<typeof LoginSchema>