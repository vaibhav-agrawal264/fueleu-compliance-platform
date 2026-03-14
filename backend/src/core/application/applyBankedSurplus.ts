import { prisma } from "../../infrastructure/db/prismaClient"

export async function applyBankedSurplus(shipId: string, year: number, amount: number) {

  const banked = await prisma.bankEntry.aggregate({
    where: { shipId },
    _sum: { amount: true }
  })

  const available = banked._sum.amount ?? 0

  if (amount > available) {
    throw new Error("Insufficient banked surplus")
  }

  await prisma.bankEntry.create({
    data: {
      shipId,
      year,
      amount: -amount
    }
  })

  return {
    applied: amount,
    remaining: available - amount
  }
}