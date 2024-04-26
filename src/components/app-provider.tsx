import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "sonner";
import { StreamProvider } from "./stream-cient-provider";
import "@stream-io/video-react-sdk/dist/css/styles.css";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ClerkProvider
          appearance={{
            variables: {
              colorPrimary: "#FF0080",
            },
            elements: {},
          }}
        >
          <StreamProvider>{children}</StreamProvider>
        </ClerkProvider>
        <Toaster position="top-right" richColors></Toaster>
      </ThemeProvider>
    </>
  );
}
