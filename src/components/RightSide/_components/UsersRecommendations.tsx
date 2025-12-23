import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
// =====================================================================
function UsersRecommendations() {
  return (
    <div className="flex gap-5">
      <Image
        src={"/person.jpeg"}
        alt="User Photo"
        width={100}
        height={100}
        className="rounded-full object-cover w-13.75 h-13.75 border-2 border-gray-200"
      />
      <div>
        <Link href={"/"} className="hover:underline font-bold line-clamp-1">
          Amr Khaled 
        </Link>
        <h3 className="text-[13px] text-blackLight line-clamp-1">
          Company • Professional Training and
        </h3>
        <button className="flex items-center gap-1 border py-1 font-semibold border-primary text-primary hover:bg-blue-50 cursor-pointer px-4 rounded-full mt-1">
          <i className="text-[18px]">
            <FiPlus />
          </i>
          Follow
        </button>
      </div>
    </div>
  );
}

export default UsersRecommendations;
