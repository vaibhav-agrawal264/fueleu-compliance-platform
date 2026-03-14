import { Request, Response } from "express"
import { bankSurplus } from "../../../core/application/bankSurplus"
import { applyBankedSurplus } from "../../../core/application/applyBankedSurplus"

export async function bankController(req: Request, res: Response) {

  try {

    const { shipId, year, amount } = req.body

    const result = await bankSurplus(shipId, year, amount)

    res.json(result)

  } catch (error) {

    res.status(400).json({ error: (error as Error).message })

  }
}

export async function applyBankController(req: Request, res: Response) {

  try {

    const { shipId, year, amount } = req.body

    const result = await applyBankedSurplus(shipId, year, amount)

    res.json(result)

  } catch (error) {

    res.status(400).json({ error: (error as Error).message })

  }
}