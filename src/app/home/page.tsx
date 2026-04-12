import Link from "next/link";
import { Button } from "@/components/ui/button";
import { projectsPath } from "@/paths";

export default function Home() {
  return (
    <div className="flex place-content-center">
      <Button asChild variant={"secondary"}>
        <Link href={projectsPath()}>Projects Home Page</Link>
      </Button>
    </div>
  );
}
