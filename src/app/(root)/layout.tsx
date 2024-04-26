import { NavBar } from "~/components/navbar";
import Sidebar from "~/components/sidebar";

export const metadata = {
  title: "Dashboard ",
  description: "Dashboard for the VidMeet app.",
  icons: [{ rel: "icon", url: "/icons/logo.svg" }],
};
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-[100vh] w-full flex-row">
      <div className="  hidden h-full flex-col gap-10 border-r-2 border-border/25 bg-popover/85  px-10 pt-5 sm:flex sm:w-[150px] lg:w-[350px]">
        <Sidebar></Sidebar>
      </div>
      <div className="flex h-full w-full flex-col">
        <NavBar></NavBar>
        <div className="flex h-full w-full overflow-y-scroll bg-popover p-4">
          {children}
        </div>
      </div>
    </main>
  );
}
