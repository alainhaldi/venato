import { LucidePackagePlus } from "lucide-react";
import IconButton from "@/components/icon-button";

const ProjectBar = () => {
  return (
    <div className="flex w-full justify-between max-w-2xl pb-4 border-b">
      <p className="text-2xl">Projects</p>
      <IconButton icon={<LucidePackagePlus />} label="New Project"></IconButton>
    </div>
  );
};

export default ProjectBar;
