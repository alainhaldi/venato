import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { Prisma, PrismaClient, ProjectStatus } from "@/generated/prisma";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const projectData: Prisma.ProjectCreateInput[] = [
  {
    name: "Monster Inc.",
    Description:
      "Quarterly maintenance contract for the Monstropolis scare floor.",
    projectNumber: "MON-001",
    hoursBooked: 120,
    hoursAvailable: 200,
    status: ProjectStatus.IN_PROGRESS,
  },
  {
    name: "Cars",
    Description: "Telemetry overhaul for Radiator Springs racing team.",
    projectNumber: "CAR-014",
    hoursBooked: 80,
    hoursAvailable: 160,
    status: ProjectStatus.PAUSED,
  },
  {
    name: "Toy Story",
    Description: "Seasonal merchandising sprint for Andy's toy box.",
    projectNumber: "TOY-077",
    hoursBooked: 190,
    hoursAvailable: 220,
    status: ProjectStatus.DONE,
  },
];

export async function main() {
  // Start timer
  const t0 = performance.now();
  console.log("DB Seed: Started ...");

  // Wipe existing data
  await prisma.project.deleteMany();

  for (const p of projectData) {
    await prisma.project.create({ data: p });
  }

  // Stop timer
  const t1 = performance.now();
  console.log(`DB Seed: Finished (${t1 - t0}ms)`);
}

main();
