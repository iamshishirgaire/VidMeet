"use client";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React from "react";
import Loading from "~/components/loader";
import PageWrapper from "~/components/page-wrapper";
import MeetingSetup from "../components/meeting-setup";
import MeetingRoom from "../components/meeting-room";
import { useGetCallById } from "~/hooks/useGetCallById";

function MeetingPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { user, isLoaded } = useUser();
  const [setup, setSetup] = React.useState(false);
  const { call, isCallLoading } = useGetCallById(params.id);

  if (!isLoaded || isCallLoading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loading />
      </div>
    );

  return (
    <PageWrapper>
      <StreamCall call={call}>
        <StreamTheme>
          {!setup ? (
            <MeetingSetup setIsSetupComplete={setSetup}></MeetingSetup>
          ) : (
            <MeetingRoom></MeetingRoom>
          )}
        </StreamTheme>
      </StreamCall>
    </PageWrapper>
  );
}

export default MeetingPage;
