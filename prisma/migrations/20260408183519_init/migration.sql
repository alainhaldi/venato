-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('Paused', 'IN_PROGRESS', 'DONE');

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "status" "ProjectStatus" NOT NULL DEFAULT 'IN_PROGRESS',

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
