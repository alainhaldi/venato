/*
  Warnings:

  - Made the column `name` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "Description" TEXT,
ADD COLUMN     "hoursAvailable" DOUBLE PRECISION NOT NULL DEFAULT 30,
ADD COLUMN     "hoursBooked" DOUBLE PRECISION NOT NULL DEFAULT 10,
ADD COLUMN     "projectNumber" TEXT NOT NULL DEFAULT '50001234',
ALTER COLUMN "name" SET NOT NULL;
