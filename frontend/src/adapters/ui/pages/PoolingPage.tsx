import { useState } from "react"
import { runPooling } from "../../../core/application/usePool"
import type { PoolMember } from "../../../core/domain/Pool"

export default function PoolingPage() {

  const [year, setYear] = useState("")
  const [members, setMembers] = useState<PoolMember[]>([])

  async function handlePool() {

    const result = await runPooling(Number(year))

    setMembers(result.members)

  }

  return (

    <div>

      <h2 className="text-2xl font-semibold mb-4">
        Pooling
      </h2>

      <div className="flex gap-3 mb-4">

        <input
          placeholder="Year"
          value={year}
          onChange={e => setYear(e.target.value)}
          className="border p-2 rounded"
        />

        <button
          onClick={handlePool}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Create Pool
        </button>

      </div>

      {members.length > 0 && (

        <table className="min-w-full border border-gray-200">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-3">Ship</th>
              <th className="p-3">Adjusted CB</th>

            </tr>

          </thead>

          <tbody>

            {members.map((m, index) => (

              <tr key={index} className="border-t">

                <td className="p-3">{m.shipId}</td>
                <td className="p-3">{m.cb}</td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>

  )

}