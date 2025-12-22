"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import ButtonSIgnOut from "./ButtonSIgnOut";
// =========================================================
function Me() {
  const [openProfile, setOpenProfile] = useState(false);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      if (!e.target.closest(".button, .div, .link"))
        return setOpenProfile(false);
    };
    document.addEventListener("click", handleClick);
    return () => {
      removeEventListener("click", handleClick);
    };
  });
  return (
    <div className="flex items-center justify-center flex-col relative pt-1.5">
      <div
        onClick={() => setOpenProfile(!openProfile)}
        className="cursor-pointer button"
      >
        <Image
          src={"/user.svg"}
          alt="User Image"
          width={100}
          height={100}
          className="w-8.75 rounded-full"
        />
        <div className="flex items-center gap-1">
          <span className="group-hover:text-blackLight">Me</span>
          <i className="text-[17px]">
            <IoMdArrowDropdown />
          </i>
        </div>
      </div>
      <MeProfile openProfile={openProfile} />
    </div>
  );
}

export default Me;

function MeProfile({ openProfile }: { openProfile: boolean }) {
  return (
    <div
      className={`absolute sm:-left-50 -left-40 -bottom-50 shadow  rounded-xl bg-white w-62.5  ${
        openProfile ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } tranistion-css div`}
    >
      <div className="flex flex-col gap-5 border-b border-b-gray-200  p-4">
        <div className="flex items-center gap-3">
          <Image
            src={"/user.svg"}
            alt="User Image"
            width={100}
            height={100}
            className="w-12.5 rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-semibold">Amr Khaled</span>
            <span className="text-[13px] font-normal">طالب في تكنولوجيا</span>
          </div>
        </div>
        <Link
          className="border-2 link border-primary rounded-full py-2 px-4 text-[14px] flex items-center justify-center w-full text-primary hover:bg-blue-50"
          href={"/profile"}
        >
          View Profile
        </Link>
      </div>
      <ButtonSIgnOut />
    </div>
  );
}
