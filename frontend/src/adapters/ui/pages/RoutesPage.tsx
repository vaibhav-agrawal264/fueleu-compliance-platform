import { useEffect, useState } from "react"
import type { Route } from "../../../core/domain/Route"
import { getRoutes } from "../../../core/application/getRoutes"

export default function RoutesPage() {

  const [routes, setRoutes] = useState<Route[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {

    async function loadRoutes() {

      try {

        setLoading(true)

        const data = await getRoutes()

        setRoutes(data)

      } catch (err) {

        setError("Failed to load routes")

      } finally {

        setLoading(false)

      }

    }

    loadRoutes()

  }, [])

  // Loading state
  if (loading) {

    return (

      <div className="flex justify-center py-10">

        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>

      </div>

    )

  }

  // Error state
  if (error) {

    return (

      <div className="text-center py-10 text-red-500">

        {error}

      </div>

    )

  }

  // Success state
  return (

    <div>

      <h2 className="text-2xl font-semibold mb-4">
        Routes
      </h2>

      <div className="overflow-x-auto">

        <table className="min-w-full border border-gray-200 rounded-lg">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-3 text-left">Route</th>
              <th className="p-3 text-left">Vessel</th>
              <th className="p-3 text-left">Fuel</th>
              <th className="p-3 text-left">Year</th>
              <th className="p-3 text-left">GHG Intensity</th>

            </tr>

          </thead>

          <tbody>

            {routes.map(route => (

              <tr
                key={route.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-3">{route.routeId}</td>
                <td className="p-3">{route.vesselType}</td>
                <td className="p-3">{route.fuelType}</td>
                <td className="p-3">{route.year}</td>
                <td className="p-3">{route.ghgIntensity}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  )

}