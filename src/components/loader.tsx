import { LoaderIcon } from "lucide-react";
import React from "react";
import { cn } from "~/lib/utils";

const Loading = ({ className }: { className?: string }) => {
  return (
    <div>
      <LoaderIcon className={cn("animate-spin", className)}></LoaderIcon>
    </div>
  );
};

export default Loading;
