import { useState } from "react"
import { bank, apply } from "../../../core/application/useBanking"

export default function BankingPage() {

  const [shipId, setShipId] = useState("")
  const [year, setYear] = useState("")
  const [amount, setAmount] = useState("")
  const [result, setResult] = useState<any>(null)

  async function handleBank() {

    const res = await bank({
      shipId,
      year: Number(year),
      amount: Number(amount)
    })

    setResult(res)

  }

  async function handleApply() {

    const res = await apply({
      shipId,
      year: Number(year),
      amount: Number(amount)
    })

    setResult(res)

  }

  return (

    <div>

      <h2 className="text-2xl font-semibold mb-4">
        Banking
      </h2>

      <div className="flex flex-col gap-3 max-w-md">

        <input
          placeholder="Ship ID"
          value={shipId}
          onChange={e => setShipId(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          placeholder="Year"
          value={year}
          onChange={e => setYear(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="border p-2 rounded"
        />

        <div className="flex gap-3">

          <button
            onClick={handleBank}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Bank Surplus
          </button>

          <button
            onClick={handleApply}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Apply Surplus
          </button>

        </div>

      </div>

      {result && (

        <div className="mt-4 p-4 bg-gray-100 rounded">

          <pre>{JSON.stringify(result, null, 2)}</pre>

        </div>

      )}

    </div>

  )

}