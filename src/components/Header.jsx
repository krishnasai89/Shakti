import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";

import durgaImg from "../assets/gallery/mahishamadini.jpg";
import dasharaVideo from "../assets/gallery/Navratri.mp4";

const Header = () => {
  const [videoStarted, setVideoStarted] = useState(false);
  const [videoEndedOnce, setVideoEndedOnce] = useState(false);
  const [muted, setMuted] = useState(false);
  const sliderRef = useRef(null);
  const videoRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const handleVideoEnd = () => {
    setVideoEndedOnce(true);
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setVideoStarted(true);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <section className="container mx-auto py-8">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center relative"
        >
          <div className="w-80 md:w-full lg:h-[35rem] lg:w-[40rem] relative">
            <Slider ref={sliderRef} {...settings}>
              {/* Slide 1 - Video */}
              <div className="relative">
                <video
                  ref={videoRef}
                  src={dasharaVideo}
                  autoPlay={false} // autoplay handled manually
                  muted={!videoStarted || muted}
                  className="rounded-lg w-full h-[35rem] object-cover"
                  onEnded={handleVideoEnd}
                />
                {!videoStarted && (
                  <button
                    onClick={handlePlayClick}
                    className="absolute inset-0 flex items-center justify-center bg-black/50 text-white font-bold text-lg rounded-lg"
                  >
                    &#x25B7;
                  </button>
                )}

                {/* Custom controls */}
                {videoStarted && (
                  <div className="absolute bottom-4 left-4 flex space-x-4 bg-black/50 p-2 rounded-md">
                    <button
                      onClick={() => videoRef.current.pause()}
                      className="text-white px-2"
                    >
                      ⏸️ Pause
                    </button>
                    <button
                      onClick={() => videoRef.current.play()}
                      className="text-white px-2"
                    >
                      ▶️ Play
                    </button>
                    <button onClick={toggleMute} className="text-white px-2">
                      {muted ? "🔇 Unmute" : "🔊 Mute"}
                    </button>
                  </div>
                )}
              </div>

              {/* Slide 2 - Image */}
              <div>
                <img
                  src={durgaImg}
                  alt="Maa Durga"
                  className="rounded-lg w-full h-[35rem] object-cover"
                />
              </div>
            </Slider>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold mb-2 text-orange-600">
            Welcome to Dashara Stories
          </h1>
          <p className="mb-4 text-gray-700">
            A small site to collect the stories, legends and pilgrim information
            related to Dussehra / Dashara and the 18 Shakti Peethas.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              Stories & summaries (Ramayana, Devi Mahatmya, regional tales)
            </li>
            <li>18 Shakti Peethas — short descriptions & pilgrim info</li>
            <li>Gallery and event highlights</li>
          </ul>
          <div className="mt-6">
            <Link
              to="/stories"
              className="px-4 py-2 bg-orange-500 text-white rounded-md mr-3 hover:bg-orange-600 transition"
            >
              Read Stories
            </Link>
            <Link
              to="/peethas"
              className="px-4 py-2 bg-white text-orange-500 border border-orange-500 rounded-md hover:bg-orange-50 transition"
            >
              Explore Peethas
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
