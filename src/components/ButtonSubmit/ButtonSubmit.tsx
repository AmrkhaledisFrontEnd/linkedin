"use client";
import Loader from "../Loader/Loader";
// ==============================================================
function ButtonSubmit({
  loading,
  contentTxt,
}: {
  loading: boolean;
  contentTxt: string;
}) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="bg-primary disabled:bg-blue-100 disabled:cursor-default py-3 px-4 rounded-full cursor-pointer text-white mt-3 hover:bg-hoverColor transition-css flex items-center justify-center"
    >
      {loading ? <Loader /> : contentTxt}
    </button>
  );
}

export default ButtonSubmit;
