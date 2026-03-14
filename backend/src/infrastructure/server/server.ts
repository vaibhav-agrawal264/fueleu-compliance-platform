import express from "express"
import cors from "cors"
import { routesController } from "../../adapters/inbound/http/routesController";
import { comparisonController } from "../../adapters/inbound/http/comparisonController"
import { setBaselineController } from "../../adapters/inbound/http/setBaselineController"
import { complianceController } from "../../adapters/inbound/http/complianceController"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("FuelEU backend running")
})

const PORT = 3000

app.get("/routes", routesController);
app.get("/routes/comparison", comparisonController)
app.post("/routes/:id/baseline", setBaselineController)
app.get("/compliance/cb", complianceController)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})