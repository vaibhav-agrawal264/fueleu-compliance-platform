import { api } from "./axiosClient"
import type { Route } from "../../../core/domain/Route"

export async function fetchRoutes(): Promise<Route[]> {

  const response = await api.get("/routes")

  return response.data

}