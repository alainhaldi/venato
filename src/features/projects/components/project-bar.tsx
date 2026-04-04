import { LucidePackagePlus } from "lucide-react";
import IconButton from "@/components/link-icon-button";
import { addProjectsPath } from "@/paths";

const ProjectBar = () => {
  return (
    <div className="flex w-full justify-between max-w-2xl pb-4 border-b">
      <p className="text-2xl">Projects</p>
      <IconButton
        label="New Project"
        href={addProjectsPath()}
        icon={<LucidePackagePlus />}
      ></IconButton>
    </div>
  );
};

export default ProjectBar;
