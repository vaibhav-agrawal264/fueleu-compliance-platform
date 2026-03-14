import { Request, Response } from "express"
import { computeComplianceBalance } from "../../../core/application/computeComplianceBalance"

export async function complianceController(req: Request, res: Response) {

  try {

    const year = Number(req.query.year)

    if (!year) {
      return res.status(400).json({
        error: "Year query parameter required"
      })
    }

    const data = await computeComplianceBalance(year)

    res.json(data)

  } catch (error) {

    res.status(500).json({
      error: "Failed to compute compliance balance"
    })

  }

}