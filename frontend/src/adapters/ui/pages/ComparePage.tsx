import { useEffect, useState } from "react"
import type { Comparison } from "../../../core/domain/Comparison"
import { getComparison } from "../../../core/application/getComparison"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts"

export default function ComparePage() {

  const [baseline, setBaseline] = useState<any>(null)
  const [data, setData] = useState<Comparison[]>([])
  const chartData = data.map(r => ({
    route: r.routeId,
    ghg: r.ghgIntensity
  }))
  useEffect(() => {

    async function loadComparison() {

      const result = await getComparison()

      setBaseline(result.baseline)
      setData(result.comparisons)

    }

    loadComparison()

  }, [])

  return (

    <div>

      <h2 className="text-2xl font-semibold mb-4">
        Compare Routes
      </h2>

      {baseline && (

        <div className="mb-4 p-4 bg-blue-50 rounded">

          Baseline Route: <b>{baseline.routeId}</b>
          (GHG: {baseline.ghgIntensity})

        </div>

      )}

      <table className="min-w-full border border-gray-200">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-3">Route</th>
            <th className="p-3">GHG Intensity</th>
            <th className="p-3">% Difference</th>
            <th className="p-3">Compliant</th>

          </tr>

        </thead>

        <tbody>

          {data.map(route => (

            <tr key={route.routeId} className="border-t">

              <td className="p-3">{route.routeId}</td>

              <td className="p-3">{route.ghgIntensity}</td>

              <td className="p-3">
                {route.percentDiff.toFixed(2)}%
              </td>

              <td className="p-3">

                {route.compliant
                  ? "✅"
                  : "❌"}

              </td>

            </tr>

          ))}

        </tbody>

      </table>
      <div className="mt-8">

        <h3 className="text-xl font-semibold mb-4">
          GHG Intensity Comparison
        </h3>

        <ResponsiveContainer width="100%" height={300}>

          <BarChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="route" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="ghg" fill="#2563eb" />

          </BarChart>

        </ResponsiveContainer>

      </div>
    </div>

  )

}