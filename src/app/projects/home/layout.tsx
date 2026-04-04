import { LucideHouse } from "lucide-react";
import AppHeader from "@/components/header";
import MainBody from "@/components/main-body";
import { homePath } from "@/paths";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppHeader
        backButtonProps={{
          backButtonLabel: "Home",
          backButtonHref: homePath(),
          icon: <LucideHouse />,
        }}
      ></AppHeader>
      <MainBody>{children}</MainBody>
    </>
  );
}
