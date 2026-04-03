import { LucidePackagePlus } from "lucide-react";
import IconButton from "@/components/icon-button";

const ProjectBar = () => {
  return (
    <>
      <div>ProjectBar</div>
      <IconButton icon={<LucidePackagePlus />} label="New Project"></IconButton>
    </>
  );
};

export default ProjectBar;
