import { Request, Response } from "express";
import { getRoutes } from "../../../core/application/getRoutes";

export async function routesController(req: Request, res: Response) {
  try {
    const routes = await getRoutes();
    res.json(routes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch routes" });
  }
}