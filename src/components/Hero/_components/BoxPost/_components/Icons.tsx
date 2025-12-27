import React from "react";
import { FaRegImage } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
// =======================================================================
function Icons({
  setImagePost,
  setImagePostFile,
}: {
  setImagePost: React.Dispatch<React.SetStateAction<string>>;
  setImagePostFile: React.Dispatch<React.SetStateAction<File | null>>;
}) {
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePost(url);
      setImagePostFile(file);
    }
  };
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-3  py-2 pr-3">
        <div>
          <label
            className="text-[28px] text-green-800 cursor-pointer"
            htmlFor="image-post"
          >
            <FaRegImage className=" hover:scale-105" />
          </label>
          <input onChange={handleChangeImage} type="file" id="image-post" hidden />
        </div>
        <i className="text-[29px] text-red-500 cursor-pointer hover:scale-105">
          <IoLogoYoutube />
        </i>
      </div>
    </div>
  );
}

export default Icons;
