import { api } from "./axiosClient"

export async function setBaseline(routeId: number) {

  const response = await api.post(`/routes/${routeId}/baseline`)

  return response.data

}