"use server";

import { auth } from "@/auth";
import { User } from "@prisma/client";
import { prisma } from "@/lib/prisma";
// ======================================================================
export const GetUser = async () => {
  try {
    const session = await auth();
    let user: User | null = null;
    if (session && session.user) {
        console.log(session.user.id)
      const userDB = await prisma.user.findUnique({
        where: {
          id: session.user.id,
        },
      });
      user = userDB;
    }
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};
