import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLocationArrow, FaStar, FaVolumeUp } from "react-icons/fa";

const FestivalGrid = ({ title, text, items, videoSrc, imgSrc }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState({});

  // Simulate loading delay for skeleton (you can adjust this)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSpeak = () => {
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  // ---------- Skeleton Loader ----------
  if (loading) {
    return (
      <section className="bg-orange-50 py-10 animate-pulse">
        <div className="container mx-auto text-center">
          {/* Title Skeleton */}
          <div className="h-6 w-2/3 mx-auto bg-gray-300 rounded mb-8"></div>

          {/* Grid Skeleton */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-md bg-gray-200 flex flex-col"
              >
                <div className="w-full h-[20rem] bg-gray-300 rounded-md mb-3"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
                <div className="h-3 bg-gray-300 rounded w-5/6 mb-3"></div>
                <div className="flex justify-between mt-auto border-t pt-2">
                  <div className="h-3 bg-gray-300 rounded w-1/3"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ---------- Real Content ----------
  return (
    <section className="bg-orange-50 py-10">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-2xl font-bold text-orange-600 mb-6 cursor-pointer"
          onClick={() => setShowPopup(true)}
        >
          {title}
        </h2>

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

              {/* Scrollable text + optional video */}
              <div className="mt-4 text-gray-700 text-left flex flex-col gap-4 max-h-[60vh] overflow-y-auto pr-2 rounded-md">
                <div className="flex items-center gap-2">
                  <p className="flex-1">{text}</p>
                  <button
                    onClick={handleSpeak}
                    className="text-blue-500 hover:text-blue-700"
                    title="Read aloud"
                  >
                    <FaVolumeUp size={20} />
                  </button>
                </div>

                {/* Optional video embed */}
                {videoSrc && (
                  <div className="mt-4 w-full flex justify-center">
                    <iframe
                      src={videoSrc}
                      width="350"
                      height="600"
                      frameBorder="0"
                      allowFullScreen
                      className="rounded-lg shadow-md"
                      title="Instagram video"
                      loading="lazy"
                    ></iframe>
                  </div>
                )}
                {imgSrc && (
                  <div className="mt-4 w-full flex justify-center">
                    <img
                      src={imgSrc}
                      alt=""
                      width="350"
                      height="350"
                      className="rounded-lg shadow-md object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-lg shadow-md hover:shadow-2xl ${item.color}`}
            >
              {/* Image with skeleton */}
              {!imageLoaded[index] && (
                <div className="w-full h-[20rem] bg-gray-300 animate-pulse rounded-md mb-2" />
              )}
              <img
                src={item.image}
                alt={item.goddess || item.day}
                className={`w-full h-[20rem] object-cover rounded-md mb-2 transition-opacity duration-500 ${
                  imageLoaded[index] ? "opacity-100" : "opacity-0 absolute"
                }`}
                onLoad={() =>
                  setImageLoaded((prev) => ({ ...prev, [index]: true }))
                }
              />

              {/* Content */}
              <h3 className="font-bold text-lg cursor-pointer">
                {item.day || item.goddess}
              </h3>
              <p className="text-gray-600 text-sm mt-1 pb-2">
                {item.description}
              </p>

              <div className="grid grid-cols-2 justify-between items-center text-gray-600 text-sm mt-auto pt-3 border-t">
                <span className="flex items-center gap-1 text-sm">
                  <FaLocationArrow /> Direction: {item.direction}
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

export default FestivalGrid;
