import { LucideFolderClosed } from "lucide-react";
import AppHeader from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppHeader
        backButtonProps={{
          backButtonLabel: "Projects",
          backButtonHref: "projects/home",
          icon: <LucideFolderClosed />,
        }}
      ></AppHeader>
      <main className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden py-12 px-8 bg-secondary/30 flex flex-col">
        {children}
      </main>
    </>
  );
}
