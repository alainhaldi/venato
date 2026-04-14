"use client";

import { LucideClockPlus } from "lucide-react";
import ButtonWithLabelAndIcon from "./base-button-with-label-and-icon";

type AddingHoursButtonWithLabelProps = {
  children: string;
};

const AddingHoursButtonWithLabel = ({
  children,
}: AddingHoursButtonWithLabelProps) => {
  const addHours = () => {};
  return (
    <ButtonWithLabelAndIcon
      icon={<LucideClockPlus />}
      onClick={addHours}
      onClickedLabel={"Adding hours..."}
    >
      {children}
    </ButtonWithLabelAndIcon>
  );
};

export default AddingHoursButtonWithLabel;
