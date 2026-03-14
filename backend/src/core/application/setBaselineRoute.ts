import { prisma } from "../../infrastructure/db/prismaClient"

export async function setBaselineRoute(routeId: number) {

  // remove existing baseline
  await prisma.route.updateMany({
    data: { isBaseline: false }
  })

  // set new baseline
  const updatedRoute = await prisma.route.update({
    where: { id: routeId },
    data: { isBaseline: true }
  })

  return updatedRoute
}