import { LucideFolderClosed } from "lucide-react";
import AppHeader from "@/components/header";
import MainBody from "@/components/main-body";
import { projectsPath } from "@/paths";

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
          backButtonHref: projectsPath(),
          icon: <LucideFolderClosed />,
        }}
      ></AppHeader>
      <MainBody>{children}</MainBody>
    </>
  );
}
