import { GetUser } from "@/lib/GetUser";
import Image from "next/image";
import { redirect } from "next/navigation";
// ======================================================
async function Hero() {
  const actions = [
    { id: crypto.randomUUID(), nameAction: "Photo", icon: "/photo-icon.svg" },
    { id: crypto.randomUUID(), nameAction: "Video", icon: "/video-icon.svg" },
    { id: crypto.randomUUID(), nameAction: "Event", icon: "/event-icon.svg" },
    {
      id: crypto.randomUUID(),
      nameAction: "Write article",
      icon: "/article-icon.svg",
    },
  ];
  const user = await GetUser();
  if (!user) redirect("/login");
  return (
    <main className="flex-1 ">
      <div className="w-full p-5 border-2 border-gray-100 rounded-2xl flex flex-col gap-3 bg-white">
        <div className="flex items-center gap-3 ">
          <Image
            src={user.image ? user.image : "/user.svg"}
            alt="Your Photo"
            width={100}
            height={100}
            className="w-12.5 h-12.5 rounded-full border-2 border-gray-200"
          />
          <button className="border border-gray-300 rounded-full py-3 px-4 w-full cursor-pointer text-start text-blackLight hover:bg-gray-100 transition-css">
            Start a post
          </button>
        </div>
        <ul className="flex items-center justify-between w-full">
          {actions.map((action) => (
            <button key={action.id} className="flex items-center gap-2 text-blackLight hover:bg-gray-100 rounded cursor-pointer py-2 px-4 transition-css">
              <Image
                src={action.icon}
                alt={action.nameAction}
                width={50}
                height={50}
                className="w-7.5"
              />
              {action.nameAction}
            </button>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Hero;
