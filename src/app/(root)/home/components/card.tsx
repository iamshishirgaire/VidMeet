"use client";

import Image from "next/image";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { avatarImages } from "~/constants";
import { cn } from "~/lib/utils";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  return (
    <section className="flex min-h-fit w-full flex-col justify-between gap-20 rounded-lg  border    px-5 py-8 transition-shadow duration-300 hover:shadow-md dark:bg-background/10 xl:max-w-[568px]">
      <article className="flex flex-col gap-5">
        <Image
          className="dark:invert-none  grayscale invert sepia filter dark:filter-none "
          src={icon}
          alt="upcoming"
          width={28}
          height={28}
        />
        <div
          className={cn("flex justify-between", isPreviousMeeting && "mt-20")}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </article>
      {!isPreviousMeeting && (
        <article className={cn("relative flex justify-center ", {})}>
          <div className="flex w-full gap-2 ">
            <Button
              onClick={handleClick}
              className="rounded bg-green-500 px-6 hover:bg-green-600"
            >
              {buttonIcon1 && (
                <Image src={buttonIcon1} alt="feature" width={20} height={20} />
              )}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast.info("Link copied to clipboard");
              }}
              className="bg-primary px-6"
            >
              <Image
                src="/icons/copy.svg"
                alt="feature"
                width={20}
                height={20}
              />
              &nbsp; Copy Link
            </Button>
          </div>
        </article>
      )}
    </section>
  );
};

export default MeetingCard;
