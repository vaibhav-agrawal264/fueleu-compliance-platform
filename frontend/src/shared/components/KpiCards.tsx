import { useEffect, useState } from "react"
import { getComparison } from "../../core/application/getComparison"

export default function KpiCards() {

  const [total, setTotal] = useState(0)
  const [compliant, setCompliant] = useState(0)
  const [nonCompliant, setNonCompliant] = useState(0)

  useEffect(() => {

    async function loadStats() {

      const data = await getComparison()

      const routes = data.comparisons

      setTotal(routes.length)

      const compliantCount = routes.filter(r => r.compliant).length

      setCompliant(compliantCount)
      setNonCompliant(routes.length - compliantCount)

    }

    loadStats()

  }, [])

  return (

    <div className="grid grid-cols-3 gap-6 mb-8">

      <div className="bg-white shadow rounded-lg p-6 text-center">

        <h3 className="text-gray-500 text-sm">
          Total Routes
        </h3>

        <p className="text-3xl font-bold">
          {total}
        </p>

      </div>

      <div className="bg-green-100 shadow rounded-lg p-6 text-center">

        <h3 className="text-gray-600 text-sm">
          Compliant Routes
        </h3>

        <p className="text-3xl font-bold text-green-700">
          {compliant}
        </p>

      </div>

      <div className="bg-red-100 shadow rounded-lg p-6 text-center">

        <h3 className="text-gray-600 text-sm">
          Non-Compliant Routes
        </h3>

        <p className="text-3xl font-bold text-red-700">
          {nonCompliant}
        </p>

      </div>

    </div>

  )

}