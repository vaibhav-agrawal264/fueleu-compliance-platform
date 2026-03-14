import { bankSurplus, applySurplus } from "../../adapters/infrastructure/api/bankingApi"
import type { BankRequest } from "../domain/Banking"

export async function bank(data: BankRequest) {

  return bankSurplus(data)

}

export async function apply(data: BankRequest) {

  return applySurplus(data)

}