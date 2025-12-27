import z from "zod";
// ====================================================================================
export const CreatePostSchema = z.object({
  contentTxt: z.string({ message: "Content must be a string" }),
  postImage: z.instanceof(File).optional().nullable(),
  userId: z.string().nonempty({ message: "User not found" }),
});
