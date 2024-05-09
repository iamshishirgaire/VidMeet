import {
  AlbumIcon,
  ScreenShareIcon,
  TextIcon,
  WallpaperIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Component() {
  return (
    <>
      <header className="flex items-center justify-between bg-gray-900 px-6 py-4 text-white">
        <Link className="flex items-center gap-2" href="/">
          <div className="flex items-center justify-start gap-2">
            <Image
              src={"/icons/logo.svg"}
              height={40}
              width={40}
              alt="Vidmeet Logo"
            ></Image>
          </div>
          <span className="text-xl font-bold">Vidmeet</span>
        </Link>
        <Link href={"/home"}>
          <Button variant="ghost">Get Started</Button>
        </Link>
      </header>
      <main>
        <section className="flex h-[100vh] items-center justify-center bg-gray-900 py-20 text-white md:py-32">
          <div className=" mx-5 flex flex-col justify-around gap-4 lg:mx-2 lg:flex-row">
            <div className="max-w-md space-y-6 lg:my-auto">
              <h1 className="text-4xl font-bold md:text-5xl">
                Effortless Video Calls for Teams
              </h1>
              <p className="pb-8 text-lg text-gray-300 md:text-xl">
                Vidmeet makes it easy to connect with your team, clients, and
                customers. Start a meeting in seconds and enjoy seamless video
                conferencing.
              </p>
              <Link href={"/home"}>
                <Button variant="default">Start a Meeting</Button>
              </Link>
            </div>
            <div className="rounded-lg bg-red-400  lg:h-full lg:w-[700px] ">
              <Image
                alt="Video Call Illustration"
                className="h-[300px] rounded-lg bg-cover lg:h-[500px]"
                height={300}
                width={700}
                src={
                  "https://images.unsplash.com/photo-1612831455359-970e23a1e4e9"
                }
              />
            </div>
          </div>
        </section>
        <section className="py-20 md:py-64">
          <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2">
            <div>
              <ScreenShareIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              <h2 className="mt-4 text-2xl font-bold">Screen Sharing</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Share your screen with participants and collaborate in
                real-time. Present documents, slides, or applications with ease.
              </p>
            </div>
            <div>
              <WallpaperIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              <h2 className="mt-4 text-2xl font-bold">Virtual Backgrounds</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Customize your background with a variety of virtual backgrounds.
                Maintain professionalism and privacy during your calls.
              </p>
            </div>
            <div>
              <AlbumIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              <h2 className="mt-4 text-2xl font-bold">Meeting Recording</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Record your meetings and share them with participants. Never
                miss a moment and review important discussions.
              </p>
            </div>
            <div>
              <TextIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              <h2 className="mt-4 text-2xl font-bold">In-Call Chat</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Stay connected with your team during the call. Share files,
                links, and messages in the in-call chat.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 py-8 text-white">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
          <Link className="flex items-center gap-2" href="/">
            <div className="flex items-center justify-start gap-2">
              <Image
                src={"/icons/logo.svg"}
                height={40}
                width={40}
                alt="Vidmeet Logo"
              ></Image>
            </div>
            <span className="text-xl font-bold">Vidmeet</span>
          </Link>
          <div className="mt-4 flex gap-6 md:mt-0">
            <p className="font-semibold text-white">All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
