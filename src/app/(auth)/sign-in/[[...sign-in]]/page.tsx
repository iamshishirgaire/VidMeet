"use client";
import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function SignInPage() {
  const theme = useTheme();
  console.log(theme);
  return (
    <main>
      <SignIn
        appearance={{
          baseTheme: theme.resolvedTheme === "dark" ? dark : undefined,
        }}
      ></SignIn>
    </main>
  );
}
