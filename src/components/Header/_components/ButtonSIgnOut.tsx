"use client"
import { signOut } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";
// ===========================================================
function ButtonSIgnOut() {
  const router = useRouter()
  const handleClick = async()=>{
    signOut()
    router.refresh()
    redirect("/login")
  }
  return (
    <button onClick={handleClick} className="p-4 text-primary button cursor-pointer flex items-center gap-3 w-full justify-center">
      Sign Out
      <i>
        <FaSignOutAlt />
      </i>
    </button>
  );
}

export default ButtonSIgnOut;
