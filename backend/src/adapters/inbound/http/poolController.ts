import { Request, Response } from "express"
import { createPool } from "../../../core/application/createPool"

export async function poolController(req: Request, res: Response) {

  try {

    const { year } = req.body

    const pool = await createPool(year)

    res.json(pool)

  } catch (error) {

    res.status(500).json({
      error: "Pooling failed"
    })

  }

}