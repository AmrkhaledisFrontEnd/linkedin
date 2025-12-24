"use client";

import { BiSolidError } from "react-icons/bi";
// ===================================================================
function ServerErrorMessage({ message }: { message: string }) {
  return (
    <p className="text-red-500 p-2 rounded bg-red-200 flex items-center gap-2">
      <i className="text-xl">
        <BiSolidError />
      </i>
      {message}
    </p>
  );
}

export default ServerErrorMessage;
