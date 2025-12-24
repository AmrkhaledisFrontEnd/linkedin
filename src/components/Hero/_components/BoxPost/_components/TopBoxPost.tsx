"use client";
import { AiOutlineClose } from "react-icons/ai";
// ===========================================
function TopBoxPost({
  setShowBoxPost,
}: {
  setShowBoxPost: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex p-5  items-center justify-between w-full border-b border-b-gray-100">
      <h2 className="text-xl cursor-default text-blackLight">Create a post</h2>
      <i
        onClick={() => setShowBoxPost(false)}
        className="text-xl cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-css"
      >
        <AiOutlineClose />
      </i>
    </div>
  );
}

export default TopBoxPost;
