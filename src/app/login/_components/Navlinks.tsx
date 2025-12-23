import Link from "next/link";
// =================================================================================
function Navlinks() {
  return (
    <div className="flex items-center sm:gap-5 gap-3">
      <Link
        className="sm:text-[18px] sm:block hidden hover:bg-blue-50 border-2 border-primary text-primary text-[14px] py-2 px-6 rounded-full"
        href={"/credential-login"}
      >
        Welcome back
      </Link>
      <Link
        className="bg-primary sm:py-2 py-1.5  border-2 border-transparent px-6 rounded-full text-white sm:text-[18px] text-[14px] hover:bg-hoverColor"
        href={"/register"}
      >
        Sign up
      </Link>
    </div>
  );
}

export default Navlinks;
