import { useState } from "react"
import RoutesPage from "./adapters/ui/pages/RoutesPage"
import ComparePage from "./adapters/ui/pages/ComparePage"
import BankingPage from "./adapters/ui/pages/BankingPage"

function App() {

  const [tab, setTab] = useState("routes")

  const tabs = ["routes", "compare", "banking", "pooling"]

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="max-w-6xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8 text-center">
          FuelEU Compliance Dashboard
        </h1>

        <div className="flex justify-center gap-4 mb-8">

          {tabs.map(t => (

            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg font-medium
              ${tab === t
                ? "bg-blue-600 text-white"
                : "bg-white border hover:bg-gray-200"
              }`}
            >
              {t.toUpperCase()}
            </button>

          ))}

        </div>

        <div className="bg-white shadow rounded-lg p-6">

          {tab === "routes" && <RoutesPage />}

          {tab === "compare" && <ComparePage />}

          {tab === "banking" && <BankingPage />}

          {tab === "pooling" && <div>Pooling tab coming next</div>}

        </div>

      </div>

    </div>

  )

}

export default App