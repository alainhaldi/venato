import { LucideIcon } from "lucide-react";
import { Route } from "next";
import IconButton from "./link-icon-button";
import { ThemeSwitcher } from "./theme/theme-switcher";

type BackButtonProps = {
  backButtonLabel: string;
  backButtonHref: Route;
  icon: React.ReactElement<LucideIcon>;
};

type AppHeaderProps = {
  backButtonProps?: BackButtonProps;
};

const AppHeader = ({ backButtonProps }: AppHeaderProps) => {
  return (
    <div className="sticky top-0 z-50 flex flex-row h-12 items-center justify-between px-4 border-b backdrop-blur-xs">
      {/* Element 1: BackIcon or Placeholder div */}
      <div className="flex-1">
        {backButtonProps ? (
          <IconButton
            label={backButtonProps.backButtonLabel}
            href={backButtonProps.backButtonHref}
            icon={backButtonProps.icon}
          ></IconButton>
        ) : (
          <div />
        )}
      </div>
      {/* Element 2: Text */}
      <div className="flex flex-1 justify-center">
        <p className="text-2xl font-bold">venato</p>
      </div>
      {/* Element 3: ThemeSwitcher */}
      <div className=" flex flex-1 justify-end">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default AppHeader;
