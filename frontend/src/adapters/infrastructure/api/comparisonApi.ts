import { api } from "./axiosClient"
import type { ComparisonResponse } from "../../../core/domain/Comparison"

export async function fetchComparison(): Promise<ComparisonResponse> {

  const response = await api.get("/routes/comparison")

  return response.data

}