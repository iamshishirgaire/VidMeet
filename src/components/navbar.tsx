"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "~/constants";
import { cn } from "~/lib/utils";
import { ModeToggle } from "./theme-toggler";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

export const NavBar = () => {
  const pathname = usePathname();
  const theme = useTheme();

  return (
    <div className="sticky top-0 flex h-[70px] w-full justify-between border-b-2 border-border/25 bg-popover/90  px-10 py-3 backdrop-blur-sm">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 sm:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only hidden">Toggle Navigation Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-1 flex-col gap-6">
            <Link href={"/home"}>
              <div className="flex cursor-pointer items-center justify-start gap-2">
                <Image
                  src={"/icons/logo.svg"}
                  height={40}
                  width={40}
                  alt="Vidmeet Logo"
                ></Image>
                <p className={cn(" text-2xl font-semibold")}>
                  <span className="tracking-normal">VID</span>
                  <span className="tracking-normal text-primary">MEET</span>
                </p>
              </div>
            </Link>
            {sidebarLinks.map((item) => {
              const isActive =
                pathname === item.route ||
                pathname.startsWith(`${item.route}/`);

              return (
                <SheetClose asChild key={item.route}>
                  <Link
                    href={item.route}
                    key={item.label}
                    className={cn(
                      "flex items-center justify-start gap-4 rounded-lg p-3 text-gray-500 transition-colors duration-200 hover:bg-primary/10 dark:text-blue-100 dark:hover:bg-primary",
                      {
                        "bg-primary/10 text-primary dark:bg-primary dark:text-white":
                          isActive,
                      },
                    )}
                  >
                    {
                      <item.imgURL
                        className={cn(
                          "h-6 w-6 rounded-sm stroke-gray-500 dark:stroke-blue-100",
                          isActive &&
                            "stroke-primary text-primary dark:stroke-white dark:text-white",
                        )}
                      />
                    }
                    <p className={cn("text-md  font-semibold")}>{item.label}</p>
                  </Link>
                </SheetClose>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center justify-end gap-4">
        <ModeToggle></ModeToggle>
        <SignedIn>
          <UserButton
            userProfileProps={{
              appearance: {
                baseTheme: theme.resolvedTheme === "dark" ? dark : undefined,
              },
            }}
            appearance={{
              baseTheme: theme.resolvedTheme === "dark" ? dark : undefined,

              elements: {
                formButtonPrimary: "bg-primary text-white",
                avatarBox: "h-8 w-8",
              },
            }}
          ></UserButton>
        </SignedIn>
      </div>
    </div>
  );
};
