import { fetchComparison } from "../../adapters/infrastructure/api/comparisonApi"
import type { ComparisonResponse } from "../domain/Comparison"

export async function getComparison(): Promise<ComparisonResponse> {

  return fetchComparison()

}