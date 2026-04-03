import { ThemeSwitcher } from "./theme/theme-switcher";

const AppHeader = () => {
  // TODO: conditional render Button if not on HomeScreen

  return (
    <div className="sticky top-0 z-50 flex flex-row h-12 items-center justify-between px-4 border-b backdrop-blur-xs">
      <p>Button</p>
      <p className="text-2xl font-bold">venato</p>
      <ThemeSwitcher></ThemeSwitcher>
    </div>
  );
};

export default AppHeader;
