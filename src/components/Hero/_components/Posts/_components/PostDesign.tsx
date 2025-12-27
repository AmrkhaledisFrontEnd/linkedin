import { PostType } from "@/lib/types/types";
import Image from "next/image";
import PostDetails from "./PostDetails";
import OwnerPostDetails from "./OwnerPostDetails";
import { BiSolidLike } from "react-icons/bi";
import { MdComment } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { BiSolidDislike } from "react-icons/bi";
import AddComment from "./AddComment";
import { GetUser } from "@/lib/GetUser";
// =====================================================================
async function PostDesign({ post }: { post: PostType }) {
  const actions = [
    { id: crypto.randomUUID(), name: "Like", icon: <BiSolidLike /> },
    { id: crypto.randomUUID(), name: "Dislike", icon: <BiSolidDislike /> },
    { id: crypto.randomUUID(), name: "Comment", icon: <MdComment /> },
    { id: crypto.randomUUID(), name: "Send", icon: <IoIosSend /> },
  ];
  const user = await GetUser()
  if(!user) return
  return (
    <li className="rounded shadow bg-white  overflow-hidden">
      <div className="flex items-center justify-end py-2 border-b border-b-gray-200 mx-3">
        <Image
          src={"/ellipsis.svg"}
          alt="Icon"
          width={30}
          height={30}
          className=" cursor-pointer hover:bg-gray-100 rounded-full p-1 transition-css
        "
        />
      </div>
      <div className="flex flex-col">
        <OwnerPostDetails post={post} />
        <PostDetails post={post} />
        <div className="flex items-center gap-12 pt-3 justify-center border-t border-t-gray-200 mt-5">
          {actions.map((action) => (
            <div
              key={action.id}
              className="flex items-center gap-2 cursor-pointer py-2 px-4 rounded hover:bg-gray-100 transition-css"
            >
              <i className="text-[20px] text-slate-700">{action.icon}</i>
              <h2 className="text-[14px] font-bold text-slate-700">
                {action.name}
              </h2>
            </div>
          ))}
        </div>
       <AddComment user={user}/>
      </div>
    </li>
  );
}

export default PostDesign;
