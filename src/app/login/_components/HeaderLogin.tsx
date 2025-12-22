import Image from "next/image";
import Link from "next/link";
import Navlinks from "./Navlinks";
// =====================================================================
function HeaderLogin() {
  return (
    <header className="fixed top-0 w-full py-6 bg-gray-50">
      <h2 className="md:text-[14px] sm:text-[12px] text-[10px] text-center text-primary mb-7 sm:font-semibold font-bold">
        Download Linkedin on Google Play{" "}
        <Link
          className="py-2 px-6 rounded-full bg-primary text-white ml-3 md:text-[12px] sm:text-[11px] text-[9px]"
          target="_blank"
          href={
            "https://play.google.com/store/apps/details?hl=ar&id=com.linkedin.android"
          }
        >
          Download Now!
        </Link>
      </h2>
      <div>
        <div className="container-css">
          <nav className="flex items-center justify-between">
            <Link href={"/"}>
              <Image
                src={"/login-logo.svg"}
                alt="Linkedin Image"
                width={200}
                height={200}
                className="sm:w-35 w-30"
              />
            </Link>
            <Navlinks />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default HeaderLogin;
