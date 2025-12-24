import Image from "next/image";
import FormRegister from "./_components/FormRegister";
import { Metadata } from "next";
// ========================================================
export const metadata: Metadata = {
  title: "LinkedIn | Sign Up",
  description:
    "Create your LinkedIn account to build your professional network, showcase your skills, and explore career opportunities.",
};

function page() {
  return (
    <main className="min-h-screen bg-[#F4F2EE]">
      <div className="container-css p-5 flex flex-col gap-10">
        <Image
          src={"/login-logo.svg"}
          alt="Linkedin logo"
          width={200}
          height={200}
          className="md:w-37.5 sm:w-34 w-30"
        />
        <div className="flex items-center justify-center flex-col md:gap-10 sm:gap-7 gap-4">
          <h1 className="md:text-3xl sm:text-2xl text-xl text-center">Make the most of your professional life</h1>
          <FormRegister />
        </div>
      </div>
    </main>
  );
}

export default page;
