import Image from "next/image";
import Link from "next/link";
import InputSearch from "./_components/InputSearch";
import Navlinks from "./_components/Navlinks";
import Me from "./_components/Me";
// ======================================================================
function Header() {
  return (
    <header className="shadow w-full fixed top-0 lg:pb-0 pb-20 ">
      <div className="container-css px-3 flex items-center justify-between h-17">
        <div className="flex items-center gap-3">
          <Link href={"/linkedin"}>
            <Image
              src={"/linkedin.png"}
              alt="Linkedin logo"
              width={150}
              height={150}
              className="md:w-12.5 w-11"
            />
          </Link>
          <InputSearch />
        </div>
        <div className="h-full flex items-center md:gap-10 gap-5 sm:flex-row flex-row-reverse">
          <Navlinks />
          <div className="h-full flex items-center gap-3">
            <Me />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
