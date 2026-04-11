type ProjectDetailPageProps = {
  params: {
    projectName: string;
  };
};

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const { projectName } = await params;
  return <div>{projectName}</div>;
};

export default ProjectDetailPage;
