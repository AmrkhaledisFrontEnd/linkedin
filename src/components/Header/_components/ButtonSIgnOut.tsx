"use client";
import { signOut } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";
// ===========================================================
function ButtonSIgnOut() {
  const router = useRouter();
  const handleClick = async () => {
    await signOut();
    router.refresh();
    redirect("/login");
  };
  return (
    <button
      onClick={handleClick}
      className="p-4 hover:underline text-blackLight button cursor-pointer flex items-center gap-3 w-fit text-[14px] mx-auto hover:text-primary transition-css"
    >
      Sign Out
      <i>
        <FaSignOutAlt />
      </i>
    </button>
  );
}

export default ButtonSIgnOut;
