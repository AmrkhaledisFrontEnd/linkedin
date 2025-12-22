import React from "react";
import HeaderLogin from "./_components/HeaderLogin";
import { Metadata } from "next";
// ================================================================================
export const metadata: Metadata = {
  title: "Linkedin: Login or Sign Up",
  description:
    "Sign in to LinkedIn to connect with professionals, access your network, manage your profile, and explore job opportunities.",
};
function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HeaderLogin />
      {children}
    </div>
  );
}

export default layout;
