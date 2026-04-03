import { Button } from "./ui/button";

type IconButtonProps = {
  icon: React.ReactNode;
  label: string;
};

const IconButton = ({ icon, label }: IconButtonProps) => {
  return (
    <Button>
      {icon}
      <p>{label}</p>
    </Button>
  );
};

export default IconButton;
