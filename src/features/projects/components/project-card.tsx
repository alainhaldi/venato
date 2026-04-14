import Link from "next/link";
import AddingHoursButtonWithLabel from "@/components/buttons/adding-hours-button-with-label";
import CopyButtonWithLabel from "@/components/buttons/copy-button-with-label";
import TextBox from "@/components/text-box";
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
import { projectDetailsPath } from "@/paths";
import StatusBadge from "./status-badge";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="flex w-full max-w-2xl m-4">
      <Link href={projectDetailsPath(project.id.toString())}>
        <CardHeader>
          <CardTitle>{project.name}</CardTitle>
          {/* <CardAction>Card Action</CardAction> */}
          <CardAction>
            <StatusBadge status={project.status}></StatusBadge>
          </CardAction>
          <CardDescription>{project.Description}</CardDescription>
        </CardHeader>
        {/* <CardContent>
          <div>
            <p>Card Content</p>
          </div>
        </CardContent> */}
      </Link>
      <CardFooter className="flex justify-between">
        <div className="flex flex-1">
          <TextBox>
            {/* ISO converted to: DD.MM.YYYY */}
            {project.createdAt
              .toISOString()
              .slice(0, 10)
              .split("-")
              .reverse()
              .join(".")}
          </TextBox>
        </div>
        <div className="flex flex-1 justify-center">
          <AddingHoursButtonWithLabel>{`${project.hoursBooked}h / ${project.hoursAvailable}h`}</AddingHoursButtonWithLabel>
        </div>
        <div className="flex flex-1 justify-end">
          <CopyButtonWithLabel>{project.projectNumber}</CopyButtonWithLabel>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
