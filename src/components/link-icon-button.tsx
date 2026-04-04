import { LucideIcon } from "lucide-react";
import { Route } from "next";
import Link from "next/link";
import { Button } from "./ui/button";

type IconButtonProps = {
  label: string;
  href: Route;
  icon: React.ReactElement<LucideIcon>;
};

const IconButton = ({ label, href, icon }: IconButtonProps) => {
  return (
    <Button asChild className="py-3 px-4">
      <Link href={href}>
        {icon}
        {label}
      </Link>
    </Button>
  );
};

export default IconButton;
