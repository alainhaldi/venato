import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { Prisma, PrismaClient } from "@/generated/prisma";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const projectData: Prisma.ProjectCreateInput[] = [
  {
    name: "Monster Inc.",
  },
  {
    name: "Cars",
  },
  {
    name: "Toy Story",
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
