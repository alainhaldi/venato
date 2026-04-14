"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export const updateHoursBooked = async (
  id: string,
  path: string,
  formData: FormData,
) => {
  // Check if value is a number
  if (isNaN(Number(formData.get("hours")))) {
    return;
  }

  await prisma.project.update({
    where: {
      id,
    },
    data: {
      hoursBooked: {
        increment: Number(formData.get("hours")),
      },
    },
  });
  revalidatePath(path);
};
