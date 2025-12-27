"use server";
import { revalidatePath } from "next/cache";
import { CreatePostSchema } from "../schemas/CreatePostSchema";
import { CreatePostActionDataType } from "../types/types";
import { prisma } from "@/lib/prisma";
// ===================================================================
export const CreatePostAction = async (data: CreatePostActionDataType) => {
  const validation = CreatePostSchema.safeParse(data);
  if (!validation.success) return { error: validation.error.issues[0].message };
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: validation.data.userId,
      },
    });
    let image: { image: string } | null = null;
    if (validation.data.postImage) {
      image = await uploadImagePost(validation.data.postImage);
    }
    if (!user) return { error: "Sign in to create post" };
    await prisma.post.create({
      data: {
        contentText: validation.data.contentTxt,
        userId: validation.data.userId,
        image: image && image.image ? image.image : "",
      },
    });
    revalidatePath("/linkedin")
  } catch (error) {
    console.log(error);
    return { error: "Failed create post try again later" };
  }
};

const uploadImagePost = async (imageFile: File | null) => {
  const formData = new FormData();
  if (imageFile) formData.append("file", imageFile);
  formData.append("pathname", "posts-images");
  try {
    const res = await fetch(`${process.env.NEXT_URL}/api/upload-post-image`, {
      method: "POST",
      body: formData,
    });
    const imagePost = await res.json();
    return imagePost;
  } catch (error) {
    console.log(error);
    return { error: "Failed fetch" };
  }
};
