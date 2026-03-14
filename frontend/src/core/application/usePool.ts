import { createPool } from "../../adapters/infrastructure/api/poolApi"

export async function runPooling(year: number) {

  return createPool(year)

}