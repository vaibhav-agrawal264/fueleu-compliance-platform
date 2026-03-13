import { getAllRoutes } from "../../adapters/outbound/postgres/routeRepository";

export async function getRoutes() {
  return getAllRoutes();
}