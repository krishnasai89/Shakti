import { useState } from "react";
import SHAKTI_PEETHAS from "../assets/peethas.json";

const Peethas = () => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const filtered = SHAKTI_PEETHAS.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.state.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">
          18 Shakti Peethas (starter list)
        </h2>
        <div className="mb-4 flex gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or state"
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={() => setQuery("")}
            className="px-3 py-2 border rounded"
          >
            Clear
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <div key={p.id} className="p-4 border rounded bg-white shadow-sm">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.state}</p>
              <p className="mt-2 text-gray-700 text-sm">{p.short}</p>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => setSelected(p)}
                  className="px-3 py-1 rounded bg-orange-100"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
        {selected && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
            <div className="bg-white rounded max-w-2xl w-full p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{selected.name}</h3>
                  <p className="text-sm text-gray-600">{selected.state}</p>
                </div>
                <button
                  className="text-gray-500"
                  onClick={() => setSelected(null)}
                >
                  ✕
                </button>
              </div>
              <div className="mt-4 text-gray-700">
                <p>{selected.long}</p>
              </div>
              <div className="mt-4 text-right">
                <button
                  className="px-3 py-1 rounded bg-orange-500 text-white"
                  onClick={() => setSelected(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Peethas;
