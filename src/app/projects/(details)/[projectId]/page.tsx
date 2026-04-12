import { notFound } from "next/navigation";
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

  return <div>{project?.name}</div>;
};

export default ProjectDetailPage;
