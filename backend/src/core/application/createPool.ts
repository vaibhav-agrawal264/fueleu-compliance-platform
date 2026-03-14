import { prisma } from "../../infrastructure/db/prismaClient"
import { ShipCompliance } from "@prisma/client"

type ShipCB = {
  shipId: string
  cb: number
}

export async function createPool(year: number) {

  const compliance: ShipCompliance[] = await prisma.shipCompliance.findMany({
    where: { year }
  })

  const ships: ShipCB[] = compliance.map((c: ShipCompliance) => ({
    shipId: c.shipId,
    cb: c.cb
  }))

  const surplus = ships
    .filter(s => s.cb > 0)
    .sort((a, b) => b.cb - a.cb)

  const deficit = ships
    .filter(s => s.cb < 0)
    .sort((a, b) => a.cb - b.cb)

  for (const d of deficit) {

    for (const s of surplus) {

      if (d.cb >= 0) break
      if (s.cb <= 0) continue

      const transfer = Math.min(s.cb, -d.cb)

      s.cb -= transfer
      d.cb += transfer

    }

  }

  const pool = await prisma.pool.create({
    data: {
      year
    }
  })

  for (const ship of ships) {

    const before = compliance.find(
      (c: ShipCompliance) => c.shipId === ship.shipId
    )?.cb || 0

    await prisma.poolMember.create({
      data: {
        poolId: pool.id,
        shipId: ship.shipId,
        cbBefore: before,
        cbAfter: ship.cb
      }
    })

  }

  return {
    poolId: pool.id,
    members: ships
  }

}