import { GetUser } from "@/lib/GetUser";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaGripVertical, FaColumns } from "react-icons/fa";

// ===================================================
async function TopProfile() {
  const user = await GetUser();
  if (!user) redirect("/login");
  return (
    <div className="border-2 border-gray-100 rounded-2xl overflow-hidden bg-white">
      <Link href={"/linkedin/profile"} className="flex flex-col gap-10 pb-6">
        {/* Images */}
        <div className="relative">
          <Image
            src={user.imageProfile ? user.imageProfile : "/card-bg.svg"}
            alt="Your Profile image"
            width={200}
            height={200}
            className="w-full h-17.5 object-cover"
          />
          <div className="absolute -bottom-9 left-3 object-cover">
            <Image
              src={user.image ? user.image : "/user.svg"}
              alt="Your Photo"
              width={100}
              height={100}
              className="w-16 rounded-full border-2 object-cover border-gray-200"
            />
          </div>
        </div>
        {/* text */}
        <div className="px-3">
          <h2 className="text-xl font-bold">
            {user.name.charAt(0).toUpperCase() +
              user.name.slice(1).toLocaleLowerCase()}
          </h2>
          <h3 className="text-[13px] line-clamp-2">{user.headline}</h3>
          <h3 className="text-[13px] text-blackLight">{user.city}</h3>
          <h3 className="text-[12px] ">{user.school}</h3>
        </div>
      </Link>
    </div>
  );
}

export default TopProfile;
