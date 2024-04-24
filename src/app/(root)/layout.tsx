import { Menu, MenuIcon } from "lucide-react";
import Image from "next/image";
import Sidebar from "~/components/sidebar";
import { ModeToggle } from "~/components/theme-toggler";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { cn } from "~/lib/utils";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-[100vh] w-full flex-row bg-background">
      <div className="  hidden h-full flex-col gap-10 border-r-2 border-border/25 bg-background px-10 pt-5 sm:flex sm:w-[150px] lg:w-[350px]">
        <SidebarComponent></SidebarComponent>
      </div>
      <div className="flex h-full w-full flex-col">
        <div className="flex h-[70px] w-full justify-between bg-popover px-10 py-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 sm:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only hidden">Toggle Navigation Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SidebarComponent label></SidebarComponent>
            </SheetContent>
          </Sheet>
          <div className="flex w-full justify-end">
            <ModeToggle></ModeToggle>
          </div>
        </div>
        <div className="flex h-full w-full bg-popover p-4">{children}</div>
      </div>
    </main>
  );
}

const SidebarComponent = ({ label }: { label?: boolean }) => {
  return (
    <>
      <div className="flex h-[70px] flex-row items-center justify-start">
        <Image
          src={"/icons/logo.svg"}
          alt="Vidmeet Logo"
          width={50}
          height={50}
        ></Image>
        <p
          className={cn(
            "hidden text-3xl font-semibold lg:flex ",
            label && "flex",
          )}
        >
          <span className="tracking-normal">Vid</span>
          <span className="tracking-normal text-primary">Meet</span>
        </p>
      </div>
      <Sidebar label={label}></Sidebar>
    </>
  );
};
