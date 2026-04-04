import AppHeader from "@/components/header";
import MainBody from "@/components/main-body";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppHeader></AppHeader>
      <MainBody>{children}</MainBody>
    </>
  );
}
