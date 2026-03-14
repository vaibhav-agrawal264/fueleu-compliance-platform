import { useEffect, useState } from "react"
import type { Route } from "../../../core/domain/Route"
import { getRoutes } from "../../../core/application/getRoutes"
import { setBaseline } from "../../infrastructure/api/baselineApi"

export default function RoutesPage() {

  const [routes, setRoutes] = useState<Route[]>([])
  const [filteredRoutes, setFilteredRoutes] = useState<Route[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const [vesselFilter, setVesselFilter] = useState("")
  const [fuelFilter, setFuelFilter] = useState("")
  const [yearFilter, setYearFilter] = useState("")

  useEffect(() => {

    async function loadRoutes() {

      try {

        const data = await getRoutes()

        setRoutes(data)
        setFilteredRoutes(data)

      } catch {

        setError("Failed to load routes")

      } finally {

        setLoading(false)

      }

    }

    loadRoutes()

  }, [])

  useEffect(() => {

    let result = routes

    if (vesselFilter)
      result = result.filter(r => r.vesselType === vesselFilter)

    if (fuelFilter)
      result = result.filter(r => r.fuelType === fuelFilter)

    if (yearFilter)
      result = result.filter(r => r.year.toString() === yearFilter)

    setFilteredRoutes(result)

  }, [vesselFilter, fuelFilter, yearFilter, routes])

  async function handleBaseline(id: number) {

    await setBaseline(id)

    alert("Baseline updated")

  }

  if (loading)
    return (
      <div className="flex justify-center py-10">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    )

  if (error)
    return (
      <div className="text-center py-10 text-red-500">
        {error}
      </div>
    )

  return (

    <div>

      <h2 className="text-2xl font-semibold mb-4">
        Routes
      </h2>

      {/* Filters */}

      <div className="flex gap-4 mb-4">

        <input
          placeholder="Vessel Type"
          value={vesselFilter}
          onChange={e => setVesselFilter(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          placeholder="Fuel Type"
          value={fuelFilter}
          onChange={e => setFuelFilter(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          placeholder="Year"
          value={yearFilter}
          onChange={e => setYearFilter(e.target.value)}
          className="border p-2 rounded"
        />

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full border border-gray-200 rounded-lg">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-3 text-left">Route</th>
              <th className="p-3 text-left">Vessel</th>
              <th className="p-3 text-left">Fuel</th>
              <th className="p-3 text-left">Year</th>
              <th className="p-3 text-left">GHG</th>
              <th className="p-3 text-left">Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredRoutes.map(route => (

              <tr
                key={route.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-3">{route.routeId}</td>
                <td className="p-3">{route.vesselType}</td>
                <td className="p-3">{route.fuelType}</td>
                <td className="p-3">{route.year}</td>
                <td className="p-3">{route.ghgIntensity}</td>

                <td className="p-3">

                  <button
                    onClick={() => handleBaseline(route.id)}
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Set Baseline
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  )

}