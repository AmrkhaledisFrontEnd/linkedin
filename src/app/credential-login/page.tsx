import Image from "next/image";
import { Metadata } from "next";
import FormLogin from "./_components/FormLogin";
import Link from "next/link";
// ========================================================
export const metadata: Metadata = {
  title: "LinkedIn | Welcome back",
  description:
    "Sign in to stay connected and keep your professional journey moving forward.",
};

function page() {
  return (
    <main className="min-h-screen flex items-center justify-center relative sm:pt-0 pt-15">
      <Image
        src={"/login-logo.svg"}
        alt="Linkedin logo"
        width={200}
        height={200}
        className="w-28 absolute top-7 left-7"
      />
      <div className="container-css p-3 w-full">
        <div className="flex items-center justify-center flex-col md:gap-10 sm:gap-7 gap-4 ">
          <FormLogin />
          <h3 className="text-[18px] text-blackLight">
            New to LinkedIn?
            <Link
              className="text-primary py-1 px-2 rounded-full hover:bg-blue-100 hover:underline"
              href={"/register"}
            >
              Join now
            </Link>
          </h3>
        </div>
      </div>
    </main>
  );
}

export default page;
