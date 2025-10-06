import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearchLocation, FaStar, FaVolumeUp } from "react-icons/fa";
import ashtaLakshmiData from "../assets/ashtaLakshmi.json"; // ✅ JSON import

const AshtaLakshmi = () => {
  const [showPopup, setShowPopup] = useState(false);

  // ✅ Extract data from JSON
  const { title, text, items } = ashtaLakshmiData;

  const handleSpeak = () => {
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <section className="bg-orange-50 py-10">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-2xl font-bold text-orange-600 cursor-pointer"
          onClick={() => setShowPopup(true)}
        >
          {title}
        </h2>
        <div className="p-1 bg-orange-600 rounded-2xl w-40 mx-auto my-2"></div>
        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded max-w-2xl w-full p-6 shadow-lg">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-orange-600">{title}</h3>
                <button
                  className="text-gray-500 hover:text-black text-lg"
                  onClick={() => setShowPopup(false)}
                >
                  ✕
                </button>
              </div>
              <div className="mt-4 text-gray-700 text-left flex items-center gap-2">
                <p className="flex-1">{text}</p>
                <button
                  onClick={handleSpeak}
                  className="text-blue-500 hover:text-blue-700"
                  title="Read aloud"
                >
                  <FaVolumeUp size={20} />
                </button>
              </div>
              <div className="mt-4 text-right">
                <button
                  className="px-4 py-2 rounded bg-orange-500 text-white hover:bg-orange-600"
                  onClick={() => setShowPopup(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-lg shadow-md hover:shadow-2xl ${item.color}`}
            >
              <img
                src={item.image}
                alt={item.goddess}
                className="w-full h-[20rem] object-cover rounded-md mb-2"
              />
              <h3 className="font-bold text-lg">{item.goddess}</h3>
              <p className="text-gray-600 text-sm mt-1 pb-2">
                {item.description}
              </p>
              <div className="grid grid-cols-2 justify-between items-center text-gray-600 text-sm mt-auto pt-3 border-t">
                <span className="flex items-center gap-1 text-sm">
                  <FaSearchLocation /> Direction: {item.direction}
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <FaStar /> Preposition: {item.preposition}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AshtaLakshmi;
