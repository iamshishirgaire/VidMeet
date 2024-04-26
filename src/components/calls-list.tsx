"use client";

import { Call, CallRecording } from "@stream-io/video-react-sdk";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "./loader";
import MeetingCard from "~/app/(root)/home/components/card";
import { useGetCalls } from "~/hooks/useGetCalls";
import { CircleSlash } from "lucide-react";

const CallList = ({ type }: { type: "ended" | "upcoming" | "recordings" }) => {
  const router = useRouter();
  const { endedCalls, upcomingCalls, callRecordings, isLoading } =
    useGetCalls();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);

  console.log(upcomingCalls);

  const getCalls = () => {
    switch (type) {
      case "ended":
        return endedCalls;
      case "recordings":
        return recordings;
      case "upcoming":
        return upcomingCalls;
      default:
        return [];
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
        return "No Previous Calls";
      case "upcoming":
        return "No Upcoming Calls";
      case "recordings":
        return "No Recordings";
      default:
        return "";
    }
  };

  useEffect(() => {
    const fetchRecordings = async () => {
      const callData = await Promise.all(
        callRecordings?.map((meeting) => meeting.queryRecordings()) ?? [],
      );

      const recordings = callData
        .filter((call) => call.recordings.length > 0)
        .flatMap((call) => call.recordings);

      setRecordings(recordings);
    };

    if (type === "recordings") {
      fetchRecordings();
    }
  }, [type, callRecordings]);

  if (isLoading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loading />
      </div>
    );

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();
  if (calls?.length === 0) {
    return (
      <div className="mb-10 flex h-full w-full flex-col items-center justify-center gap-5">
        <CircleSlash className="size-10 text-primary"></CircleSlash>
        <p className="text-center text-2xl font-bold">{noCallsMessage}</p>
      </div>
    );
  }
  return (
    <div className="grid h-min w-full grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
      {calls &&
        calls.length > 0 &&
        calls.map((meeting: Call | CallRecording) => (
          <MeetingCard
            key={(meeting as Call).id}
            icon={
              type === "ended"
                ? "/icons/previous.svg"
                : type === "upcoming"
                  ? "/icons/upcoming.svg"
                  : "/icons/recordings.svg"
            }
            title={
              (meeting as Call).state?.custom?.description ||
              (meeting as CallRecording).filename?.substring(0, 20) ||
              "No Description"
            }
            date={
              (meeting as Call).state?.startsAt?.toLocaleString() ||
              (meeting as CallRecording).start_time?.toLocaleString()
            }
            isPreviousMeeting={type === "ended"}
            link={
              type === "recordings"
                ? (meeting as CallRecording).url
                : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${(meeting as Call).id}`
            }
            buttonIcon1={type === "recordings" ? "/icons/play.svg" : undefined}
            buttonText={type === "recordings" ? "Play" : "Start"}
            handleClick={
              type === "recordings"
                ? () => router.push(`${(meeting as CallRecording).url}`)
                : () => router.push(`/meeting/${(meeting as Call).id}`)
            }
          />
        ))}
    </div>
  );
};

export default CallList;
