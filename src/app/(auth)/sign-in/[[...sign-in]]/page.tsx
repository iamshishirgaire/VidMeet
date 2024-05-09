"use client";
import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function SignInPage() {
  const theme = useTheme();
  return (
    <main>
      <SignIn
        fallbackRedirectUrl={"/home"}
        appearance={{
          baseTheme: theme.resolvedTheme === "dark" ? dark : undefined,
        }}
      ></SignIn>
    </main>
  );
}
