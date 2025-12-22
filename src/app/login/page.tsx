import ButtonAuthO from "./_components/ButtonAuthO";
import LoginImage from "./_components/LoginImage";
// ==================================================================
function LoginPage() {
  return (
    <main className="min-h-[90dvh] lg:mt-0 mt-5">
      <div className="container-css flex items-center justify-center h-full">
        <div className="flex sm:items-center lg:justify-between justify-center min-h-[89dvh] w-full lg:gap-5 gap-8 lg:flex-row flex-col">
          <div className="flex flex-col gap-10 lg:w-[45%] md:w-full lg:items-start items-center lg:text-start text-center">
            <div className="space-y-5">
              <h1 className="md:text-5xl sm:text-4xl text-3xl  text-primary flex flex-col gap-2 login-h1">
                Welcome to your <span>professional community</span>
              </h1>
              <p className="text-blackLight sm:text-[15px] text-[14px] md:px-0 sm:px-5">
                LinkedIn is a professional platform that lets you showcase your
                skills and experience, connect with professionals, and explore
                job opportunities and growth in your field easily.
              </p>
            </div>
            <ButtonAuthO />
          </div>
          <LoginImage />
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
