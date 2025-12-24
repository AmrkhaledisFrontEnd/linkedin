import { FaRegImage } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
// =======================================================================
function Icons() {
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-3  py-2 pr-3">
        <i className="text-[28px] text-green-800 cursor-pointer hover:scale-105">
          <FaRegImage />
        </i>
        <i className="text-[29px] text-red-500 cursor-pointer hover:scale-105">
          <IoLogoYoutube />
        </i>
      </div>
    </div>
  );
}

export default Icons;
