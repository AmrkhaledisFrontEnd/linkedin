"use client";
import { User } from "@prisma/client";
import Image from "next/image";
import { IoSend } from "react-icons/io5";
// =========================================================
function AddComment({ user }: { user: User }) {
  return (
    <div className="p-3 flex items-center gap-2">
      <Image
        src={user.image ? user.image : "user.svg"}
        width={40}
        height={40}
        alt="Your Photo"
        className="rounded-full object-cover border-2 border-gray-100"
      />
      <div className="w-full relative">
        <input
          type="text"
          className="py-3 px-4 rounded-full border border-gray-400 text-[13px] outline-none w-full"
          placeholder="Add a comment..."
        />
        <button className="absolute bg-primary text-white cursor-pointer top-2 right-2 text-[13px] p-2 rounded-full">
          <IoSend />
        </button>
      </div>
    </div>
  );
}

export default AddComment;
