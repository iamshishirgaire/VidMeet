import Image from "next/image";
import Sidebar from "~/components/sidebar";
import { ModeToggle } from "~/components/theme-toggler";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-[100vh] w-full flex-row bg-background">
      <div className=" flex h-full w-[300px] flex-col gap-10 border-r-2 border-border/25 bg-background px-10 pt-5">
        <div className="flex h-[70px] flex-row items-center justify-start">
          <Image
            src={"/icons/logo.svg"}
            alt="Vidmeet Logo"
            width={50}
            height={50}
          ></Image>
          <p className="text-3xl font-semibold ">
            <span className="tracking-normal">Vid</span>
            <span className="tracking-normal text-primary">Meet</span>
          </p>
        </div>
        <Sidebar></Sidebar>
      </div>
      <div className="flex h-full w-full flex-col">
        <div className="flex h-[70px] w-full justify-end bg-popover px-10 py-3">
          <ModeToggle></ModeToggle>
        </div>
        <div className="flex h-full w-full bg-popover p-4">{children}</div>
      </div>
    </main>
  );
}
