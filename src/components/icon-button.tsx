import { Button } from "./ui/button";

type IconButtonProps = {
  icon: React.ReactNode;
  label: string;
};

const IconButton = ({ icon, label }: IconButtonProps) => {
  return (
    <Button className="py-4 px-3">
      {icon}
      <p>{label}</p>
    </Button>
  );
};

export default IconButton;
