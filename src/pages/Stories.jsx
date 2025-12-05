import React, { useState } from "react";
import dasastories from "../assets/Dasarastories";

const Stories = () => {
  const [activeMainTab, setActiveMainTab] = useState("ramayana");
  const [activeSubTab, setActiveSubTab] = useState(
    "Bala Kanda (Rama's childhood and education)"
  );
  const [activeDurgaDay, setActiveDurgaDay] = useState("Day1");

  const subTabs =
    activeMainTab === "ramayana"
      ? Object.keys(dasastories.ramayanaKandas)
      : Object.keys(dasastories.mahishasuraMardiniParts);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Epic Stories</h1>

      {/* Main Tabs */}
      <div className="flex justify-center mb-6 flex-wrap gap-2">
        {["ramayana", "mahishasura"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-t-lg transition-colors duration-300 ${
              activeMainTab === tab
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => {
              setActiveMainTab(tab);
              setActiveSubTab(
                tab === "ramayana" ? "Bala Kanda" : "Rise of Mahishasura"
              );
            }}
          >
            {tab === "ramayana" ? "Ramayana" : "Mahishasura Mardini"}
          </button>
        ))}
      </div>

      {/* Layout: Sidebar + Content */}
      <div className="flex gap-4">
        {/* Sidebar */}
        <div className="w-60 bg-gray-100 rounded p-2 h-[500px] overflow-y-auto shadow-inner">
          {subTabs.map((sub) => (
            <button
              key={sub}
              className={`w-full text-left px-3 py-2 mb-1 rounded transition-colors duration-300 hover:bg-green-200 ${
                activeSubTab === sub
                  ? "bg-green-500 text-white font-semibold shadow"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setActiveSubTab(sub)}
            >
              {sub}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 border p-4 rounded bg-gray-50 max-h-[500px] overflow-y-auto shadow-inner transition-all duration-300">
          {/* Ramayana Content */}
          {activeMainTab === "ramayana" && (
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold mb-2">{activeSubTab}</h2>
              <div className="whitespace-pre-wrap">
                {dasastories.ramayanaKandas[activeSubTab]?.map(
                  (paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  )
                )}
              </div>
            </div>
          )}

          {/* Mahishasura Mardini Content */}
          {activeMainTab === "mahishasura" &&
            (activeSubTab !== "Durga 9-Day Battle" ? (
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold mb-2">{activeSubTab}</h2>
                <div className="whitespace-pre-wrap">
                  {Array.isArray(
                    dasastories.mahishasuraMardiniParts[activeSubTab]
                  )
                    ? dasastories.mahishasuraMardiniParts[activeSubTab].map(
                        (paragraph, index) => (
                          <p key={index} className="mb-4">
                            {paragraph}
                          </p>
                        )
                      )
                    : dasastories.mahishasuraMardiniParts[activeSubTab]}
                </div>
              </div>
            ) : (
              <div>
                {/* Nested 9-Day Tabs */}
                <div className="flex justify-start mb-4 flex-wrap gap-2">
                  {Object.keys(
                    dasastories.mahishasuraMardiniParts["Durga 9-Day Battle"]
                  ).map((day) => (
                    <button
                      key={day}
                      className={`px-2 py-1 rounded-lg transition-colors duration-300 ${
                        activeDurgaDay === day
                          ? "bg-purple-500 text-white shadow"
                          : "bg-gray-300 text-gray-800"
                      }`}
                      onClick={() => setActiveDurgaDay(day)}
                    >
                      {day}
                    </button>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-semibold">{activeDurgaDay}</h3>
                  <div className="whitespace-pre-wrap">
                    {dasastories.mahishasuraMardiniParts["Durga 9-Day Battle"][
                      activeDurgaDay
                    ].map((paragraph, index) => (
                      // <img src={} alt="" />
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
