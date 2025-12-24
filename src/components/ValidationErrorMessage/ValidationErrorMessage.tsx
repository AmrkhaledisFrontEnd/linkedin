"use client"
function ValidationErrorMessage({ message }: { message: string }) {
  return <p className="text-red-500 sm:text-[14px] text-[13px]">{message}</p>;
}

export default ValidationErrorMessage;
