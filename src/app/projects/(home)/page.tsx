import ProjectBar from "@/features/projects/components/project-bar";
import ProjectCard from "@/features/projects/components/project-card";
import { getProjects } from "@/features/projects/queries/getProjects";

const ProjectsHomePage = async () => {
  const projects = await getProjects();

  return (
    <div className="flex flex-col items-center">
      <ProjectBar></ProjectBar>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project}></ProjectCard>
      ))}
    </div>
  );
};

export default ProjectsHomePage;
