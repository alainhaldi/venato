-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "hoursAvailable" DROP DEFAULT,
ALTER COLUMN "hoursBooked" SET DEFAULT 0,
ALTER COLUMN "projectNumber" DROP DEFAULT;
