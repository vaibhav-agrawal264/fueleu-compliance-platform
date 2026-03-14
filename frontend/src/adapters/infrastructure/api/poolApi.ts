import { api } from "./axiosClient"
import type { PoolResponse } from "../../../core/domain/Pool"

export async function createPool(year: number): Promise<PoolResponse> {

  const response = await api.post("/pools", { year })

  return response.data

}