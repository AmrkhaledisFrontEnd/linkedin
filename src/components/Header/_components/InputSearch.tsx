import { RiSearch2Line } from "react-icons/ri";
// ==========================================================
function InputSearch() {
  return (
    <div className="bg-gray-100 rounded-full overflow-hidden flex items-center gap-1 h-10.75 xl:w-95 lg:w-75 lg:relative absolute lg:bottom-0 bottom-2 w-[97%]">
      <button className="w-10 h-full flex items-center justify-center text-xl cursor-pointer text-blackLight">
        <RiSearch2Line />
      </button>
      <input type="text" className="outline-none h-full w-full" placeholder="Search"/>
    </div>
  );
}

export default InputSearch;
