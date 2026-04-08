import { Badge } from "@/components/ui/badge";
import { ProjectStatus } from "@/generated/prisma";

type StatusBadgeProps = {
  status: ProjectStatus;
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const isDone = status == "DONE";
  const isInProgress = status == "IN_PROGRESS";
  const isPaused = status == "Paused";

  return (
    <div className="flex flex-wrap gap-2">
      {isDone && (
        <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
          Done
        </Badge>
      )}
      {isInProgress && (
        <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          In Progress
        </Badge>
      )}
      {isPaused && (
        <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
          Paused
        </Badge>
      )}
    </div>
  );
};

export default StatusBadge;
