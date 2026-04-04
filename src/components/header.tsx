import { LucideIcon } from "lucide-react";
import Link from "next/link";
import IconButton from "./icon-button";
import { ThemeSwitcher } from "./theme/theme-switcher";

type BackButtonProps = {
  backButtonLabel: string;
  backButtonHref: string;
  icon: React.ReactElement<LucideIcon>;
};

type AppHeaderProps = {
  backButtonProps?: BackButtonProps;
};

const AppHeader = ({ backButtonProps }: AppHeaderProps) => {
  return (
    <div className="sticky top-0 z-50 flex flex-row h-12 items-center justify-between px-4 border-b backdrop-blur-xs">
      {backButtonProps ? (
        <Link href={backButtonProps.backButtonHref}>
          <IconButton
            icon={backButtonProps.icon}
            label={backButtonProps.backButtonLabel}
          ></IconButton>
        </Link>
      ) : (
        <div />
      )}
      <p className="text-2xl font-bold">venato</p>
      <ThemeSwitcher />
    </div>
  );
};

export default AppHeader;
