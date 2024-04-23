import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>Navbar</div>
      {children}
      <div>Sidebar</div>
    </div>
  );
}
export default DashboardLayout;
