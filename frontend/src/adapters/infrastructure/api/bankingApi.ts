import { api } from "./axiosClient"
import type { BankRequest, BankResponse } from "../../../core/domain/Banking"

export async function bankSurplus(data: BankRequest) {

  const response = await api.post("/banking/bank", data)

  return response.data

}

export async function applySurplus(data: BankRequest): Promise<BankResponse> {

  const response = await api.post("/banking/apply", data)

  return response.data

}