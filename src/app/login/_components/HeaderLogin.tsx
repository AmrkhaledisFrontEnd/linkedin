import Image from "next/image";
import Link from "next/link";
// =====================================================================
function HeaderLogin() {
  return (
    <header className="pt-4">
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
          <div className="flex items-center sm:gap-5 gap-3">
            <Link className="sm:text-[18px]  text-[14px] text-blackLight hover:text-primary" href={"/"}>Join now</Link>
            <Link className="border-2 border-primary py-1.5 px-6 rounded-full text-primary sm:text-[18px] text-[14px] hover:scale-105" href={"/"}>Sign in</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default HeaderLogin;
