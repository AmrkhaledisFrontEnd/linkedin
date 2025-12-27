"use client";
import { User } from "@prisma/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Icons from "./_components/Icons";
import ButtonPost from "./_components/ButtonPost";
import TopBoxPost from "./_components/TopBoxPost";
import { CreatePostAction } from "@/lib/actions/CreatePostAction";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
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
  const [contentTxt, setContentTxt] = useState("");
  const [loading, setLoading] = useState(false);
  const [imagePost, setImagePost] = useState("");
  const [imagePostFile, setImagePostFile] = useState<File | null>(null);
  const handleClick = async () => {
    if (contentTxt.trim().length < 1 && !imagePost) return;
    setLoading(true);
    const result = await CreatePostAction({
      contentTxt,
      postImage: imagePostFile,
      userId: user.id,
    });
    setLoading(false);
    if (result?.error)
      return toast.error(result.error, {
        className: "toast-font",
      });
    setContentTxt("");
    setImagePostFile(null);
    setImagePost("");
    setShowBoxPost(false);
    toast.success("Done Post");
  };
  return (
    <div
      className={`w-full h-screen bg-black/20 backdrop-blur inset-0 flex items-center justify-center z-30 ${
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
            onKeyDown={(e) => {
              if (e.key == "Enter") return handleClick();
            }}
            value={contentTxt}
            onChange={(e) => setContentTxt(e.target.value)}
            rows={6}
            placeholder="what do you want to talk about?"
            className="border border-gray-100 rounded p-2 outline-none resize-none"
          />
          {imagePost && (
            <div className="relative div">
              <Image
                src={imagePost}
                alt="Post Image"
                width={500}
                height={500}
                className="w-full rounded object-cover max-h-100"
              />
              <button type="button" onClick={()=> setImagePost("")} className="absolute top-3 right-3 cursor-pointer text-red-500 text-xl p-2 rounded-full bg-white shadow hover:scale-105 transition-css"><MdDelete/></button>
            </div>
          )}
          <div className="flex items-center justify-between">
            <Icons
              setImagePost={setImagePost}
              setImagePostFile={setImagePostFile}
            />
            <ButtonPost
              loading={loading}
              handleClick={handleClick}
              contentTxt={contentTxt}
              imagePost={imagePost}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxPost;
