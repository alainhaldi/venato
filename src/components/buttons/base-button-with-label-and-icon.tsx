"use client";

import { LucideCheck, LucideIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

type ButtonWithLabelAndIconProps = {
  children: string;
  icon: React.ReactElement<LucideIcon>;
  onClick: () => void;
  onClickedLabel: string;
};

const ButtonWithLabelAndIcon = ({
  children,
  icon,
  onClick,
  onClickedLabel,
}: ButtonWithLabelAndIconProps) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = async () => {
    onClick();
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  return (
    <Button variant="outline" onClick={handleClick}>
      {clicked ? <LucideCheck></LucideCheck> : icon}
      {clicked ? onClickedLabel : children}
    </Button>
  );
};

export default ButtonWithLabelAndIcon;
