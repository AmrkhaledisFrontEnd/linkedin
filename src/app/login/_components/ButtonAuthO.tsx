import Image from "next/image";
// ====================================================================
function ButtonAuthO() {
  return (
    <div className="flex items-center lg:flex-col md:flex-row flex-col gap-3">
      <button className="flex sm:text-[15px] text-[14px] items-center justify-center gap-3 border border-black py-1.5 sm:w-87.5 w-75 rounded-full cursor-pointer">
        <Image
          src={"/google.svg"}
          alt="Google Logo"
          width={100}
          height={100}
          className="sm:w-7.5 w-6.5"
        />
        Sign in with Google
      </button>
      <button className="flex sm:text-[15px] text-[14px] items-center justify-center gap-3 border border-black py-1 sm:w-87.5 w-75 rounded-full cursor-pointer">
        <Image
          src={"/github.png"}
          alt="Google Logo"
          width={100}
          height={100}
          className="sm:w-9 w-8"
        />
        Sign in with Github
      </button>
    </div>
  );
}

export default ButtonAuthO;
