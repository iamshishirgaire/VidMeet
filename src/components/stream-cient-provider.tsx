"use client";
import { useUser } from "@clerk/nextjs";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { tokenProvider } from "actions/stream.actions";
import { useEffect, useState } from "react";
import Loading from "./loader";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY as string;

export const StreamProvider = ({ children }: { children: React.ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();
  useEffect(() => {
    if (!isLoaded || !user) return;
    if (!apiKey) {
      throw new Error("Stream API Key is missing");
    }
    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user.id,
        name: user?.username || user?.id,
        image: user?.imageUrl,
      },
      tokenProvider: tokenProvider,
    });
    setVideoClient(client);
  }, [user, isLoaded]);
  if (!videoClient) return <Loading></Loading>;
  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};
