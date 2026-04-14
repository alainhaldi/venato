"use client";

import { LucideClockPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import ButtonWithLabelAndIcon from "./base-button-with-label-and-icon";

type AddingHoursButtonWithLabelProps = {
  children: string;
};

const AddingHoursButtonWithLabel = ({
  children,
}: AddingHoursButtonWithLabelProps) => {
  const addHours = (_e: React.MouseEvent<HTMLButtonElement>) => {};
  return (
    <Popover>
      <PopoverTrigger asChild>
        <ButtonWithLabelAndIcon
          icon={<LucideClockPlus />}
          onClick={addHours}
          onClickedLabel={"Adding hours..."}
        >
          {children}
        </ButtonWithLabelAndIcon>
        {/* <Button variant="outline">Open Popover</Button> */}
      </PopoverTrigger>
      <PopoverContent className="w-64" align="start">
        <PopoverHeader>
          {/* <PopoverTitle>Booked Hours</PopoverTitle> */}
          <PopoverDescription>
            Add or remove hours of a project.
          </PopoverDescription>
        </PopoverHeader>
        <FieldGroup className="gap-4">
          <Field orientation="horizontal">
            <FieldLabel htmlFor="hours" className="flex flex-1">
              Charge hours:
            </FieldLabel>
            <Input id="hours" defaultValue="0" className="flex flex-1" />
            <p>h</p>
          </Field>
          <Button type="submit">Submit</Button>
        </FieldGroup>
      </PopoverContent>
    </Popover>
  );
};

export default AddingHoursButtonWithLabel;
