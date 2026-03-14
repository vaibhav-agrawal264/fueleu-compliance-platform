import { prisma } from "../../infrastructure/db/prismaClient"

export async function bankSurplus(shipId: string, year: number, amount: number) {

  if (amount <= 0) {
    throw new Error("Only positive CB can be banked")
  }

  const entry = await prisma.bankEntry.create({
    data: {
      shipId,
      year,
      amount
    }
  })

  return entry
}