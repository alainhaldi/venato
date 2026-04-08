import Link from "next/link";
import { homePath } from "@/paths";

const RootPage = () => {
  return <Link href={homePath()}>Home Page</Link>;
};

export default RootPage;
