import { prisma } from "../../../infrastructure/db/prismaClient";

export async function getAllRoutes() {
  return prisma.route.findMany();
}