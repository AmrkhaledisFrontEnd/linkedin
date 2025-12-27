import z from "zod";
import { RegisterSchema } from "../schemas/RegisterSchema";
import { LoginSchema } from "../schemas/LoginSchema";
import { CreatePostSchema } from "../schemas/CreatePostSchema";
import { Prisma } from "@prisma/client";
// ===================================================================
// Actions types
export type RegisterActionDataType = z.infer<typeof RegisterSchema>;
export type LoginActionDataType = z.infer<typeof LoginSchema>;
export type CreatePostActionDataType = z.infer<typeof CreatePostSchema>;
// Db Types
export type PostType = Prisma.PostGetPayload<{
  include: {
    user: true;
  };
}>;
