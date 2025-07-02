import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

import type { Metadata } from "next";
import "../globals.css";



export const metadata: Metadata = {
  title: "Eskanor",
  description: "Admin dashboard",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
