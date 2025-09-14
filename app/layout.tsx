import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "next-themes";
import Provider from "@/components/ThemeProvider";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Eskanor",
  description: "Fullstack web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <main className="container mx-auto">
            <NavBar />
            {children}
          </main>
          <section className="bg-black/90">
            <div className="container mx-auto">
              <div className="flex justify-between items-center p-4 text-white/90">
                <div className="flex gap-3 items-center">
                  <Image src="/krea.png" alt='krea' width={1000} height={1000} className='w-[45px] h-[45px] rounded-xl' />
                  <div className="text-2xl">Krea AI</div>
                </div>
                <div className="">
                  <span className="text-2xl inline-block mr-5">curated by</span>
                  <span className="text-3xl inline-block font-semibold">Mobbin</span>
                </div>
              </div>
            </div>
          </section>
        </Provider>
      </body>
    </html>
  );
}
