import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

type TextBoxProps = {
  children: string;
};

const TextBox = ({ children }: TextBoxProps) => {
  return (
    <p
      className={cn(
        buttonVariants({ variant: "outline" }),
        "border pointer-events-none cursor-default",
      )}
    >
      {children}
    </p>
  );
};

export default TextBox;
