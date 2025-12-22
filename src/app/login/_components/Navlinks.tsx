import Link from "next/link";
// =================================================================================
function Navlinks() {
  return (
    <div className="flex items-center sm:gap-5 gap-3">
      <Link
        className="sm:text-[18px]  text-[14px] text-blackLight hover:text-primary"
        href={"/"}
      >
        Join now
      </Link>
      <Link
        className="border-2 border-primary py-1.5 px-6 rounded-full text-primary sm:text-[18px] text-[14px] hover:scale-105"
        href={"/"}
      >
        Sign in
      </Link>
    </div>
  );
}

export default Navlinks;
