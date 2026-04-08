import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "@/generated/prisma";
import StatusBadge from "./status-badge";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="flex w-full max-w-2xl m-4">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        {/* <CardAction>Card Action</CardAction> */}
        <CardAction>
          <StatusBadge status={project.status}></StatusBadge>
        </CardAction>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      {/* <CardContent>
        <p>Card Content</p>
      </CardContent> */}
      <CardFooter className="flex justify-between">
        <p>{project.createdAt.toISOString().slice(0, 10)}</p>
        <p>25/40h</p>
        <p>50002734</p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
