import ProjectBar from "@/features/projects/components/project-bar";
import ProjectCard from "@/features/projects/components/project-card";

const ProjectsHomePage = () => {
  const data = [1, 2, 3, 4];
  return (
    <div className="flex flex-col items-center ">
      <ProjectBar></ProjectBar>
      {data.map((item) => (
        <ProjectCard key={item}></ProjectCard>
      ))}
    </div>
  );
};

export default ProjectsHomePage;
