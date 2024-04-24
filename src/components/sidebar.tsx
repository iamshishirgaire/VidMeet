"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "~/constants";
import { cn } from "~/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-1 flex-col gap-6">
      {sidebarLinks.map((item) => {
        const isActive =
          pathname === item.route || pathname.startsWith(`${item.route}/`);

        return (
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
            <p className="text-md font-semibold max-lg:hidden">{item.label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
