"use client";

import { LucideClockPlus } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { updateHoursBooked } from "@/features/actions/update-hours-booked";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import ButtonWithLabelAndIcon from "./base-button-with-label-and-icon";

type AddingHoursButtonWithLabelProps = {
  children: string;
  projectId: string;
};

const AddingHoursButtonWithLabel = ({
  children,
  projectId,
}: AddingHoursButtonWithLabelProps) => {
  const triggerPopUp = (_e: React.MouseEvent<HTMLButtonElement>) => {};
  const currentPath = usePathname();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <ButtonWithLabelAndIcon
          icon={<LucideClockPlus />}
          onClick={triggerPopUp}
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
        <form action={updateHoursBooked.bind(null, projectId, currentPath)}>
          <FieldGroup className="gap-4">
            <Field orientation="horizontal">
              <FieldLabel htmlFor="hours" className="flex flex-1">
                Charge hours:
              </FieldLabel>
              <Input
                id="hours"
                name="hours"
                defaultValue="0"
                type="number"
                step={0.25}
                className="flex flex-1"
              />
              <p>h</p>
            </Field>
            <Button type="submit">Submit</Button>
          </FieldGroup>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default AddingHoursButtonWithLabel;
