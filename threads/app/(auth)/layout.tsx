import { ClerkProvider } from "@clerk/clerk-react";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Threads",
  description: "Threads",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={}></body>
      </html>
    </ClerkProvider>
  );
}
