import Link from "next/link";
import CopyButton from "@/components/copy-button-with-label";
import CopyButtonWithLabel from "@/components/copy-button-with-label";
import TextBox from "@/components/text-box";
import { buttonVariants } from "@/components/ui/button";
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
import { cn } from "@/lib/utils";
import { projectDetailsPath, projectsPath } from "@/paths";
import StatusBadge from "./status-badge";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="flex w-full max-w-2xl m-4">
      <Link href={projectDetailsPath("dummyName")}>
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
      </Link>
      <CardFooter className="flex justify-between">
        <div className="flex flex-1">
          <TextBox>{project.createdAt.toISOString().slice(0, 10)}</TextBox>
        </div>
        <div className="flex flex-1 justify-center">
          <TextBox>23h / 30h</TextBox>
        </div>
        <div className="flex flex-1 justify-end">
          <CopyButtonWithLabel>50002734</CopyButtonWithLabel>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
