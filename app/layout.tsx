import ContextProvider from "@/context";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";
const os = Open_Sans({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Uut Budiarto",
  description: "Uut Budiarto Website And Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          os.className,
          'antialiased',
          'bg-slate-950 text-slate-200'
        )}
      >
        <NextTopLoader />
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
