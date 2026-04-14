"use client";

import { LucideCheck, LucideIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

type ButtonWithLabelAndIconProps = {
  children: string;
  icon: React.ReactElement<LucideIcon>;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickedLabel: string;
  ref?: React.Ref<HTMLButtonElement>;
} & Omit<React.ComponentProps<"button">, "onClick">;

const ButtonWithLabelAndIcon = ({
  children,
  icon,
  onClick,
  onClickedLabel,
  ref,
  ...rest
}: ButtonWithLabelAndIconProps) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick(e);
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  return (
    <Button variant="outline" onClick={handleClick} ref={ref} {...rest}>
      {clicked ? <LucideCheck></LucideCheck> : icon}
      {clicked ? onClickedLabel : children}
    </Button>
  );
};

export default ButtonWithLabelAndIcon;
