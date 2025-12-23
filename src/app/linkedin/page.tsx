import Hero from "@/components/Hero/Hero";
import LeftSide from "@/components/LeftSide/LeftSide";
import RightSide from "@/components/RightSide/RightSide";
// ==================================================================
function page() {
  return (
    <main className="space-section h-screen bg-[#F4F2EE]">
      <div className="container-css p-3 flex justify-between gap-4">
        <LeftSide />
        <Hero />
        <RightSide />
      </div>
    </main>
  );
}

export default page;
