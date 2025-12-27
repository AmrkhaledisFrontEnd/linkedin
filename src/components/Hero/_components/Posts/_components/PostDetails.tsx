"use client";
import { PostType } from "@/lib/types/types";
import Image from "next/image";
// =====================================================
function PostDetails({ post }: { post: PostType }) {
  return (
    <div className="w-full flex flex-col gap-1">
      <h2 className="text-slate-800 px-3 pb-2">{post.contentText}</h2>
      {post.image && (
        <Image
          src={post.image}
          alt="Post Image"
          width={900}
          height={600}
          className=" object-cover max-h-150 w-full"
        />
      )}
    </div>
  );
}

export default PostDetails;
