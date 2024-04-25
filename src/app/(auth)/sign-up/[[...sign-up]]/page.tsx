import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import React from "react";

export default function SignUpPage() {
  const theme = useTheme();
  console.log(theme);
  return (
    <main>
      <SignUp
        appearance={{
          baseTheme: theme.resolvedTheme === "dark" ? dark : undefined,
        }}
      ></SignUp>
    </main>
  );
}
