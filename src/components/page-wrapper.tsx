import React from "react";

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full rounded-lg bg-popover">{children}</div>
  );
}

export default PageWrapper;
