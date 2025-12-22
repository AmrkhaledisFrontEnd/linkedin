import { FaSignOutAlt } from "react-icons/fa";
// ===========================================================
function ButtonSIgnOut() {
  return (
    <button className="p-4 text-primary button cursor-pointer flex items-center gap-3 w-full justify-center">
      Sign Out
      <i>
        <FaSignOutAlt />
      </i>
    </button>
  );
}

export default ButtonSIgnOut;
