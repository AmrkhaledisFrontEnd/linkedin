"use client";
import { User } from "@prisma/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Icons from "./_components/Icons";
import ButtonPost from "./_components/ButtonPost";
import TopBoxPost from "./_components/TopBoxPost";
// ======================================================
function BoxPost({
  showBoxPost,
  setShowBoxPost,
  user,
}: {
  showBoxPost: boolean;
  setShowBoxPost: React.Dispatch<React.SetStateAction<boolean>>;
  user: User;
}) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      if (!e.target.closest(".div, .button, .box"))
        return setShowBoxPost(false);
    };
    document.addEventListener("click", handleClick);
    return () => {
      removeEventListener("click", handleClick);
    };
  });
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    if (post.trim().length < 1) return;
  };
  return (
    <div
      className={`w-full h-screen bg-black/20 backdrop-blur inset-0 flex items-center justify-center ${
        showBoxPost ? "fixed" : "hidden"
      }`}
    >
      <div className="shadow bg-white rounded w-137.5 div">
        <TopBoxPost setShowBoxPost={setShowBoxPost} />
        <div className="p-5 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <Image
              src={user.image ? user.image : "/user.svg"}
              alt="your photo"
              width={100}
              height={100}
              className="rounded-full w-15 h-15 border-2 border-gray-200"
            />
            <div className="flex flex-col ">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <h3 className="text-gray-400 text-[14px] font-semibold">
                {user.email}
              </h3>
            </div>
          </div>
          <textarea
            onChange={(e) => setPost(e.target.value)}
            rows={6}
            placeholder="what do you want to talk about?"
            className="border border-gray-100 rounded p-2 outline-none resize-none"
          />
          <div className="flex items-center justify-between">
            <Icons />
            <ButtonPost handleClick={handleClick} post={post} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxPost;
