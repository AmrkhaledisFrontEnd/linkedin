"use client";
import { useState } from "react";
import BoxPost from "./BoxPost/BoxPost";
import { User } from "@prisma/client";
// =================================================================
function ButtonAddPost({user}:{user:User}) {
  const [showBoxPost, setShowBoxPost] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowBoxPost(true)}
        className="border button border-gray-300 rounded-full py-3 px-4 w-full cursor-pointer text-start text-blackLight hover:bg-gray-100 transition-css"
      >
        Start a post
      </button>
      <BoxPost showBoxPost={showBoxPost} setShowBoxPost={setShowBoxPost} user={user}/>
    </>
  );
}

export default ButtonAddPost;
