import { notFound } from "next/navigation";
import ProjectCard from "@/features/projects/components/project-card";
import { getProject } from "@/features/projects/queries/getProject";

type ProjectDetailPageProps = {
  params: {
    projectId: string;
  };
};

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const { projectId } = await params;
  const project = await getProject(projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center">
      <ProjectCard project={project}></ProjectCard>
    </div>
  );
};

export default ProjectDetailPage;
