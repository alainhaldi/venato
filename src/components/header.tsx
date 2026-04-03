import { ArrowBigLeft } from "lucide-react";
import IconButton from "./icon-button";
import { ThemeSwitcher } from "./theme/theme-switcher";

const AppHeader = () => {
  // TODO: conditional render Button if not on HomeScreen
  const backButton = (
    <IconButton icon={<ArrowBigLeft />} label="Back"></IconButton>
  );

  return (
    <div className="sticky top-0 z-50 flex flex-row h-12 items-center justify-between px-4 border-b backdrop-blur-xs">
      {backButton}
      <p className="text-2xl font-bold">venato</p>
      <ThemeSwitcher />
    </div>
  );
};

export default AppHeader;
