"use client";
function ButtonPost({
  handleClick,
  post,
}: {
  handleClick: () => void;
  post: string;
}) {
  return (
    <button
      onClick={handleClick}
      className={`py-2 px-6 rounded-full select-none  ${
        post.trim().length < 1
          ? "cursor-default pointer-events-none bg-gray-200 text-gray-400"
          : "cursor-pointer text-white bg-primary hover:bg-hoverColor"
      }`}
    >
      Post
    </button>
  );
}

export default ButtonPost;
