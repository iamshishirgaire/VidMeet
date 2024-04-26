import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { AppProvider } from "~/components/app-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "VidMeet ",
  description: "A video conferencing app built with Next.js and Stream.",
  icons: [{ rel: "icon", url: "/icons/logo.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
