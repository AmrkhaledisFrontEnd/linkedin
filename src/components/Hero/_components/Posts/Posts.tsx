import { GetAllPosts } from "@/server/db/GetAllPosts";
import PostDesign from "./_components/PostDesign";
import { PostType } from "@/lib/types/types";
// ==============================================================
async function Posts() {
  const posts = await GetAllPosts();
  return (
    <div>
      <ul className="flex flex-col gap-3">
        {posts.map((post: PostType) => (
          <PostDesign key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}

export default Posts;
