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

  return <ProjectCard project={project}></ProjectCard>;
};

export default ProjectDetailPage;
