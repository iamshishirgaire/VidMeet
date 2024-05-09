"use client";
import { Dialog } from "@radix-ui/react-dialog";
import {
  DeviceSettings,
  VideoPreview,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { AlertCircleIcon, PhoneMissedIcon, PhoneOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const { useCallEndedAt, useCallStartsAt } = useCallStateHooks();
  const callStartsAt = useCallStartsAt();
  const callEndedAt = useCallEndedAt();
  const callTimeNotArrived =
    callStartsAt && new Date(callStartsAt) > new Date();
  const callHasEnded = !!callEndedAt;
  const router = useRouter();

  const call = useCall();

  if (!call) {
    return (
      <div className="flex h-full w-full items-center justify-center ">
        <div className="flex h-[200px] flex-col items-center justify-center gap-5">
          <PhoneMissedIcon className="size-10 text-primary"></PhoneMissedIcon>
          <p className="text-3xl font-bold">Couldn't Find any calls.</p>
          <Button
            onClick={() => {
              router.replace("/home");
            }}
          >
            Home
          </Button>
        </div>
      </div>
    );
  }

  const [isMicCamToggled, setIsMicCamToggled] = useState(false);

  useEffect(() => {
    if (isMicCamToggled) {
      call.camera.disable();
      call.microphone.disable();
    } else {
      call.camera.enable();
      call.microphone.enable();
    }
  }, [isMicCamToggled, call.camera, call.microphone]);

  if (callTimeNotArrived)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Alert
          title={`Your Meeting has not started yet. It is scheduled for ${callStartsAt.toLocaleString()}`}
        />
      </div>
    );

  if (callHasEnded)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex h-[200px] flex-col items-center justify-center gap-5">
          <PhoneOff className="size-10 text-primary"></PhoneOff>
          <p className="text-3xl font-bold">
            The call has been ended by the host.
          </p>
          <Button
            onClick={() => {
              router.replace("/home");
            }}
          >
            Home
          </Button>
        </div>
      </div>
    );

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 overflow-hidden ">
      <h1 className="text-center text-3xl font-bold">
        Setup your camera and microphone
      </h1>
      <div className="m-10">
        <VideoPreview className=" border-none"></VideoPreview>
      </div>
      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamToggled}
            onChange={(e) => setIsMicCamToggled(e.target.checked)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-primary px-4 py-2.5"
        onClick={() => {
          call.join();

          setIsSetupComplete(true);
        }}
      >
        Join meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
