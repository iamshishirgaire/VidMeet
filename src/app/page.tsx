"use client";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-white">
      <h1 className=" mb-4 text-2xl font-bold">Introduction Page</h1>
      <Button
        onClick={() => {
          router.push("/home");
        }}
      >
        Go to dashboard
      </Button>
    </main>
  );
}
