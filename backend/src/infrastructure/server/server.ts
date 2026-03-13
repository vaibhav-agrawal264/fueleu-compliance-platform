import express from "express"
import cors from "cors"
import { routesController } from "../../adapters/inbound/http/routesController";
const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("FuelEU backend running")
})

const PORT = 3000
app.get("/routes", routesController);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})