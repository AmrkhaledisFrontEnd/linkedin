"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// ======================================================================
function Navlinks() {
  const links = [
    {
      id: crypto.randomUUID(),
      linkName: "Home",
      icon: "/home-icon.svg",
      url: "/linkedin",
    },
    {
      id: crypto.randomUUID(),
      linkName: "My Network",
      icon: "/network-icon.svg",
      url: "/network",
    },
    {
      id: crypto.randomUUID(),
      linkName: "Jobs",
      icon: "/jobs-icon.svg",
      url: "/jobs",
    },
    {
      id: crypto.randomUUID(),
      linkName: "Messaging",
      icon: "/messaging-icon.svg",
      url: "/messaging",
    },
    {
      id: crypto.randomUUID(),
      linkName: "Notifications",
      icon: "/notifications-icon.svg",
      url: "/notifications",
    },
  ];
  const pathname = usePathname();
  const [openNav, setOpenNave] = useState(false);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      if (!e.target.closest(".button, .div, .link"))
        return setOpenNave(false);
    };
    document.addEventListener("click", handleClick);
    return () => {
      removeEventListener("click", handleClick);
    };
  });
  return (
    <>
      <Image
        onClick={() => setOpenNave(!openNav)}
        src={"/menu.svg"}
        alt="Menu"
        width={100}
        height={100}
        className="w-8 sm:hidden block button"
      />
      <nav
        className={`sm:flex div items-center sm:h-full sm:relative sm:left-0 sm:translate-x-0 sm:top-0 fixed left-1/2 -translate-x-1/2 top-20 sm:border-b-0 border-b-2 border-b-gray-200 bg-white sm:px-0 px-3 sm:w-fit w-full sm:py-0 py-2 sm:justify-start justify-center sm:gap-0 gap-4 sm:flex-row flex-col ${
          openNav ? "flex" : "hidden"
        }`}
      >
        {links.map((link) => (
          <Link
            href={link.url}
            key={link.id}
            className={`flex items-center sm:justify-center flex-col md:px-6 sm:px-4 px-6 gap-1 h-full ${
              pathname == link.url &&
              "border-black border-b-2 hover:border-b-blackLight"
            } group link`}
          >
            <Image
              src={link.icon}
              alt={link.linkName}
              width={100}
              height={100}
              className="md:w-6.75 sm:w-6 w-7"
            />
            <span className="md:text-[12px] sm:text-[11px] text-[14px] group-hover:text-blackLight ">
              {link.linkName}
            </span>
          </Link>
        ))}
      </nav>
    </>
  );
}

export default Navlinks;
