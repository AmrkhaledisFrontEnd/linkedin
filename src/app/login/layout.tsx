import React from "react";
import HeaderLogin from "./_components/HeaderLogin";
// ================================================================================
function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HeaderLogin />
      {children}
    </div>
  );
}

export default layout;
