import { prisma } from "../../infrastructure/db/prismaClient"
import { Route } from "@prisma/client"

export async function compareRoutes() {

  const routes: Route[] = await prisma.route.findMany()

  const baseline = routes.find((r: Route) => r.isBaseline)

  if (!baseline) {
    throw new Error("Baseline route not set")
  }

  const result = routes
    .filter((r: Route) => !r.isBaseline)
    .map((route: Route) => {

      const percentDiff =
        ((route.ghgIntensity / baseline.ghgIntensity) - 1) * 100

      return {
        routeId: route.routeId,
        ghgIntensity: route.ghgIntensity,
        baselineIntensity: baseline.ghgIntensity,
        percentDiff: Number(percentDiff.toFixed(2)),
        compliant: route.ghgIntensity <= 89.3368
      }
    })

  return {
    baseline,
    comparisons: result
  }
}