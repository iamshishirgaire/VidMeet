import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import React from "react";

export default function SignUpPage() {
  const theme = useTheme();
  return (
    <main>
      <SignUp
        fallbackRedirectUrl={"/home"}
        appearance={{
          baseTheme: theme.resolvedTheme === "dark" ? dark : undefined,
        }}
      ></SignUp>
    </main>
  );
}
