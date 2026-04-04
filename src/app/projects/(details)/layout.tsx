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
      <p>Hello Layout 2</p>
      {children}
    </>
  );
}
