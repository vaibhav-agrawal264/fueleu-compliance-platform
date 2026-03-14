import { prisma } from "../../infrastructure/db/prismaClient"
import { Route } from "@prisma/client"

const TARGET_INTENSITY = 89.3368

export async function computeComplianceBalance(year: number) {

  const routes:Route[] = await prisma.route.findMany({
    where: { year }
  })

  const results = routes.map((route:Route) => {

    const energy = route.fuelConsumption * 41000

    const cb =
      (TARGET_INTENSITY - route.ghgIntensity) * energy

    return {
      routeId: route.routeId,
      year: route.year,
      ghgIntensity: route.ghgIntensity,
      energy,
      complianceBalance: cb,
      status: cb > 0 ? "Surplus" : "Deficit"
    }

  })

  return results
}