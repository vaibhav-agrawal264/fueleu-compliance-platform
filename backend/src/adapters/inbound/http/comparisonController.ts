import { Request, Response } from "express"
import { compareRoutes } from "../../../core/application/compareRoutes"

export async function comparisonController(req: Request, res: Response) {
  try {

    const data = await compareRoutes()

    res.json(data)

  } catch (error) {

    res.status(500).json({
      error: "Failed to compare routes"
    })

  }
}