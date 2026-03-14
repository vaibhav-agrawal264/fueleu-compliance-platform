import { Request, Response } from "express"
import { setBaselineRoute } from "../../../core/application/setBaselineRoute"

export async function setBaselineController(req: Request, res: Response) {

  try {

    const routeId = Number(req.params.id)

    const route = await setBaselineRoute(routeId)

    res.json({
      message: "Baseline route updated",
      route
    })

  } catch (error) {

    res.status(500).json({
      error: "Failed to update baseline"
    })

  }
}