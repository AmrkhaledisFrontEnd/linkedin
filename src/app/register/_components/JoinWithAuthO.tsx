import ButtonAuthO from "@/components/ButtonAuthO/ButtonAuthO";
import Link from "next/link";
function JoinWithAuthO() {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <ButtonAuthO />
      </div>
      <h3 className="text-center mt-6">
        Already on LinkedIn?
        <Link href={"/credential-login"} className="text-primary hover:underline ml-1">
          Sign in
        </Link>
      </h3>
    </div>
  );
}

export default JoinWithAuthO;
