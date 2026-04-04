import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex place-content-center">
      <Button asChild variant={"secondary"}>
        <Link href="/projects/home">Projects Home Page</Link>
      </Button>
    </div>
  );
}
