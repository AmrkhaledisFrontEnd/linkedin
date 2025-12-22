import Image from "next/image";
// ===========================================================
function LoginImage() {
  return (
    <Image
      src={"/login-hero.svg"}
      alt="Image"
      width={600}
      height={600}
      className="lg:w-[45%] md:w-[60%] sm:w-[70%] w-[85%] sm:mx-0 mx-auto login-image"
    />
  );
}

export default LoginImage;
