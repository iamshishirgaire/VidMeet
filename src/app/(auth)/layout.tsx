import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[100dvh] w-full items-center justify-center bg-popover">
      {children}
    </div>
  );
}

export default AuthLayout;
