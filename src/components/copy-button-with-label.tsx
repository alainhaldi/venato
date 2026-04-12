"use client";

import { LucideCopy } from "lucide-react";
import ButtonWithLabelAndIcon from "./button-with-label-and-icon";

type CopyButtonWithLabelProps = {
  children: string;
};

const CopyButtonWithLabel = ({ children }: CopyButtonWithLabelProps) => {
  const onClick = async () => {
    await navigator.clipboard.writeText(children);
  };

  return (
    <ButtonWithLabelAndIcon
      icon={<LucideCopy></LucideCopy>}
      onClick={onClick}
      onClickedLabel={"Copied!"}
    >
      {children}
    </ButtonWithLabelAndIcon>
  );
};

export default CopyButtonWithLabel;
