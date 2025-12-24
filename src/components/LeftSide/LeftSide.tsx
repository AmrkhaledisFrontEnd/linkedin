import Image from "next/image";
import Link from "next/link";
import BottomLinks from "./_components/BottomLinks";
import TopProfile from "./_components/TopProfile";
// ===========================================================
function LeftSide() {
  return (
    <aside className="w-65 flex flex-col gap-2 ">
      <TopProfile />
      <div className="p-5 shadow rounded-2xl bg-white">
        <Link
          href={"/"}
          className="group hover:underline flex items-center justify-between"
        >
          <div>
            <h3 className="text-[13px]">Connections</h3>
            <h2 className="text-blackLight text-[14px]">Grow your network</h2>
          </div>
          <Image
            src={"/add-friend-icon.svg"}
            alt="Add Friend Icon"
            width={50}
            height={50}
            className="w-5 border-b group-hover:border-b-black border-transparent"
          />
        </Link>
      </div>
      <BottomLinks />
    </aside>
  );
}

export default LeftSide;
