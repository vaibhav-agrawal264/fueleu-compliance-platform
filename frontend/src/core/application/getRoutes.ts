import { fetchRoutes } from "../../adapters/infrastructure/api/routeApi"
import type { Route } from "../domain/Route"

export async function getRoutes(): Promise<Route[]> {

  return fetchRoutes()

}