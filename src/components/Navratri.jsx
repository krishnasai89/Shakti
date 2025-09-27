import { useState } from "react";
import {
  FaLeaf,
  FaAppleAlt,
  FaSmile,
  FaChild,
  FaSun,
  FaMoon,
  FaStar,
  FaBook,
  FaCrown,
  FaBullhorn,
  FaMusic,
} from "react-icons/fa"; // just examples, choose appropriate

import day1Img from "../assets/navratri/Shailaputri.png";
import day2Img from "../assets/navratri/Brahmacharini.png";
import day3Img from "../assets/navratri/chandraghanta.jpg";
import day4Img from "../assets/navratri/Kushmanda.png";
import day5Img from "../assets/navratri/Skandamata.png";
import day6Img from "../assets/navratri/Katyayani.png";
import day7Img from "../assets/navratri/Kalaratri.png";
import day8Img from "../assets/navratri/Mahagauri.png";
import day9Img from "../assets/navratri/Siddhidhatri.png";
import day10Img from "../assets/navratri/Vijayadashami.png";
import day1 from "../assets/gallery/Sri Vidya/Bala Tripura Sundari.png";
import day2 from "../assets/gallery/Sri Vidya/Gayatri.jpg";
import day3 from "../assets/gallery/Sri Vidya/Annapoorna.png";
import day4 from "../assets/dasa_mahavidya/Tripura Sundari.png";
import day5 from "../assets/gallery/Sri Vidya/Rajarajeshwari.jpg";
import day6 from "../assets/gallery/Sri Vidya/Mahalakshmi.png";
import day7 from "../assets/gallery/Sri Vidya/Saraswati Devi.png";
import day8 from "../assets/navratri/Vijayadashami.png";
import day9 from "../assets/dasa_mahavidya/matangi.png";
import day10 from "../assets/gallery/Sri Vidya/Vijaya Dasami.png";

export default function Navaratri() {
  const [activeDay, setActiveDay] = useState(1);

  // Normal Navadurga (North India)
  const normalDays = [
    {
      id: 1,
      image: day1Img,
      icon: <FaBullhorn className="text-pink-700 text-2xl" />, // bull = Shailaputri’s mount
      title: "Shailaputri Puja",
      description:
        'Dedicated to Shailaputri ("Daughter of the Mountains"), an incarnation of Parvati.',
      puja: "Devotees offer red flowers, sandalwood paste, and sweets.",
      avatar: "Represents patience and devotion.",
      color: "bg-red-100",
    },
    {
      id: 2,
      image: day2Img,
      icon: <FaLeaf className="text-green-600 text-2xl" />, // tapas/penance
      title: "Brahmacharini Puja",
      description: "Symbolizing penance, devotion, and knowledge.",
      puja: "Offer sugar, fruits, and flowers.",
      avatar: "Represents penance and devotion.",
      color: "bg-orange-100",
    },
    {
      id: 3,
      image: day3Img,
      icon: <FaMoon className="text-yellow-600 text-2xl" />, // crescent moon
      title: "Chandraghanta Puja",
      description: "Worshipped with a crescent moon on her forehead.",
      puja: "Offer milk, sweets, and red flowers.",
      avatar: "Blesses with courage.",
      color: "bg-yellow-100",
    },
    {
      id: 4,
      image: day4Img,
      icon: <FaSun className="text-orange-500 text-2xl" />,
      title: "Kushmanda Puja",
      description: "Believed to have created the universe with her smile.",
      puja: "Offer malpua and pumpkin.",
      avatar: "Symbol of health, wealth, and energy.",
      color: "bg-green-100",
    },
    {
      id: 5,
      image: day5Img,
      icon: <FaChild className="text-pink-600 text-2xl" />, // child = Skanda
      title: "Skandamata Puja",
      description: "Mother of Kartikeya, carrying him on her lap.",
      puja: "Offer bananas and yellow flowers.",
      avatar: "Embodiment of motherly love.",
      color: "bg-blue-100",
    },
    {
      id: 6,
      image: day6Img,
      icon: <FaCrown className="text-red-600 text-2xl" />,
      title: "Katyayani Puja",
      description: "Fierce warrior form of Durga.",
      puja: "Offer honey and red flowers.",
      avatar: "Represents valor.",
      color: "bg-indigo-100",
    },
    {
      id: 7,
      image: day7Img,
      icon: <FaStar className="text-black text-2xl" />,
      title: "Kalaratri Puja",
      description: "Dark form who destroys evil forces.",
      puja: "Offer jaggery and sesame seeds.",
      avatar: "Remover of fear.",
      color: "bg-purple-100",
    },
    {
      id: 8,
      image: day8Img,
      icon: <FaMoon className="text-gray-500 text-2xl" />,
      title: "Mahagauri Puja",
      description: "Radiant like the moon, symbolizes purity.",
      puja: "Offer coconuts and white flowers.",
      avatar: "Purifies devotee’s life.",
      color: "bg-pink-100",
    },
    {
      id: 9,
      image: day9Img,
      icon: <FaBook className="text-blue-700 text-2xl" />,
      title: "Siddhidatri Puja",
      description: "Blesses devotees with spiritual powers.",
      puja: "Offer sesame seeds and fruits.",
      avatar: "Embodiment of perfection.",
      color: "bg-teal-100",
    },
    {
      id: 10,
      image: day10Img,
      icon: <FaSmile className="text-yellow-600 text-2xl" />,
      title: "Vijayadashami (Durga Visarjan)",
      description:
        "Victory of Goddess Durga over Mahishasura and Rama over Ravana.",
      puja: "Special prayers and immersion of idols.",
      avatar: "Victory of good over evil.",
      color: "bg-yellow-50",
    },
  ];

  // Sri Vidya Devi icons (examples)
  const sriVidyaDays = [
    {
      id: 1,
      image: day1,
      icon: <FaChild className="text-pink-500 text-2xl" />,
      title: "Bala Tripura Sundari",
      description: "Child form symbolizing purity and auspicious beginnings.",
      puja: "Offer milk, white flowers, and sweets.",
      avatar: "Embodiment of childlike energy.",
    },
    {
      id: 2,
      image: day2,
      icon: <FaSun className="text-yellow-600 text-2xl" />,
      title: "Gayatri Devi",
      description: "Embodiment of the Gayatri Mantra.",
      puja: "Chant Gayatri Mantra, offer lotus.",
      avatar: "Symbol of wisdom.",
    },
    {
      id: 3,
      image: day3,
      icon: <FaAppleAlt className="text-green-600 text-2xl" />,
      title: "Annapoorna Devi",
      description: "Giver of nourishment and food.",
      puja: "Offer cooked rice and grains.",
      avatar: "Symbol of sustenance.",
    },
    {
      id: 4,
      image: day4,
      icon: <FaCrown className="text-red-600 text-2xl" />,
      title: "Lalita Tripura Sundari",
      description: "Supreme goddess of Sri Vidya tradition.",
      puja: "Chant Lalita Sahasranama, offer kumkum.",
      avatar: "Symbol of supreme Shakti.",
    },
    {
      id: 5,
      image: day5,
      icon: <FaCrown className="text-pink-700 text-2xl" />,
      title: "Rajarajeshwari",
      description: "Queen of Queens, sovereign goddess.",
      puja: "Offer turmeric and sandal.",
      avatar: "Symbol of supreme authority.",
    },
    {
      id: 6,
      image: day6,
      icon: <FaLeaf className="text-green-500 text-2xl" />,
      title: "Mahalakshmi",
      description: "Bestower of wealth and prosperity.",
      puja: "Offer lotus and chant Lakshmi Ashtakam.",
      avatar: "Symbol of abundance.",
    },
    {
      id: 7,
      image: day7,
      icon: <FaBook className="text-blue-600 text-2xl" />,
      title: "Saraswati Devi",
      description: "Goddess of wisdom and learning.",
      puja: "Offer books, white flowers, and veena worship.",
      avatar: "Symbol of knowledge.",
    },
    {
      id: 8,
      image: day8,
      icon: <FaStar className="text-red-600 text-2xl" />,
      title: "Durga (Chandi Homam)",
      description: "Fierce form invoked for protection.",
      puja: "Perform Chandi Homam, offer red flowers.",
      avatar: "Symbol of courage.",
    },
    {
      id: 9,
      image: day9,
      icon: <FaMusic className="text-green-600 text-2xl" />,
      title: "Raja Matangi",
      description: "Devi associated with wisdom, speech, and music.",
      puja: "Offer green clothes, chant Matangi mantras.",
      avatar: "Bestows mastery of speech and music.",
    },
    {
      id: 10,
      image: day10,
      icon: <FaSmile className="text-yellow-600 text-2xl" />,
      title: "Vijaya Dasami",
      description: "Day of victory and new beginnings.",
      puja: "Children start education (Aksharabhyasam).",
      avatar: "Symbol of success and dharma.",
    },
  ];

  const normalDay = normalDays.find((d) => d.id === activeDay);
  const sriVidyaDay = sriVidyaDays.find((d) => d.id === activeDay);

  return (
    <div className="mx-auto p-6">
      <div className="text-center">
        <h2 className="text-2xl font-extrabold text-pink-900 mb-2">
          10 Days of Dussehra / Navaratri Celebration
        </h2>
        <div className="p-1 bg-pink-900 rounded-2xl w-40 mx-auto mt-1"></div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-pink-200 mb-6 overflow-x-auto">
        {Array.from({ length: 10 }, (_, i) => (
          <button
            key={i + 1}
            className={`px-4 py-2 text-sm font-semibold transition ${
              activeDay === i + 1
                ? "border-b-2 border-pink-600 text-pink-700"
                : "text-pink-500 hover:text-pink-700"
            }`}
            onClick={() => setActiveDay(i + 1)}
          >
            Day {i + 1}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Navadurga */}
        <div>
          <h3 className="text-lg font-bold text-pink-700 mb-3">
            Navadurga Worship (North India)
          </h3>
          <div
            className={`p-5 rounded-lg shadow-lg hover:shadow-xl ${normalDay?.color}`}
          >
            {normalDay && (
              <>
                {normalDay.image && (
                  <img
                    src={normalDay.image}
                    alt={normalDay.title}
                    className="w-full h-[55rem] object-cover rounded-md mb-2"
                  />
                )}
                <div className="flex items-center gap-2 mb-2">
                  {normalDay.icon}
                  <h4 className="text-lg font-bold text-pink-800">
                    {normalDay.title}
                  </h4>
                </div>
                <p className="text-gray-700 mb-3">{normalDay.description}</p>
                <p className="mb-2">
                  <span className="font-semibold">Puja: </span>
                  {normalDay.puja}
                </p>
                <p>
                  <span className="font-semibold">Avatar: </span>
                  {normalDay.avatar}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Sri Vidya */}
        <div>
          <h3 className="text-lg font-bold text-pink-700 mb-3">
            Sri Vidya / Shakta Worship (South India)
          </h3>
          <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl">
            {sriVidyaDay && (
              <>
                {sriVidyaDay.image && (
                  <img
                    src={sriVidyaDay.image}
                    alt={sriVidyaDay.title}
                    className="w-full h-[55rem] object-cover rounded-md mb-2"
                  />
                )}
                <div className="flex items-center gap-2 mb-2">
                  {sriVidyaDay.icon}
                  <h4 className="text-lg font-bold text-pink-800">
                    {sriVidyaDay.title}
                  </h4>
                </div>
                <p className="text-gray-700 mb-3">{sriVidyaDay.description}</p>
                <p className="mb-2">
                  <span className="font-semibold">Puja: </span>
                  {sriVidyaDay.puja}
                </p>
                <p>
                  <span className="font-semibold">Avatar: </span>
                  {sriVidyaDay.avatar}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
