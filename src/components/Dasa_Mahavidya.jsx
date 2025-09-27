import React from "react";
import FestivalGrid from "./FestivalGrid";
import kaliImg from "../assets/dasa_mahavidya/Kali.png";
import taraImg from "../assets/dasa_mahavidya/Tara.png";
import tripuraSundariImg from "../assets/dasa_mahavidya/Tripura Sundari.png";
import bhuvaneshwariImg from "../assets/dasa_mahavidya/Bhuvaneshwari.png";
import bhairaviImg from "../assets/dasa_mahavidya/Bhairavi.png";
import chinnamastaImg from "../assets/dasa_mahavidya/Chinnamasta.png";
import dhumavatiImg from "../assets/dasa_mahavidya/Dhumavati.png";
import bagalamukhiImg from "../assets/dasa_mahavidya/bagalamukhi.png";
import matangiImg from "../assets/dasa_mahavidya/matangi.png";
import kamalaImg from "../assets/dasa_mahavidya/kamala.png";

const mahavidyas = [
  {
    goddess: "Kali",
    color: "bg-gray-200",
    meaning: "Goddess of time and transformation.",
    image: kaliImg,
  },
  {
    goddess: "Tara",
    color: "bg-blue-100",
    meaning: "Savior goddess, compassionate guide.",
    image: taraImg,
  },
  {
    goddess: "Tripura Sundari (Shodashi)",
    color: "bg-pink-100",
    meaning: "Supreme beauty and bliss.",
    image: tripuraSundariImg,
  },
  {
    goddess: "Bhuvaneshwari",
    color: "bg-yellow-100",
    meaning: "Queen of the universe.",
    image: bhuvaneshwariImg,
  },
  {
    goddess: "Bhairavi",
    color: "bg-red-200",
    meaning: "Terrifying power of divine wrath.",
    image: bhairaviImg,
  },
  {
    goddess: "Chinnamasta",
    color: "bg-purple-100",
    meaning: "Self-sacrifice and transcendence.",
    image: chinnamastaImg,
  },
  {
    goddess: "Dhumavati",
    color: "bg-gray-300",
    meaning: "Widow goddess, symbol of detachment.",
    image: dhumavatiImg,
  },
  {
    goddess: "Bagalamukhi",
    color: "bg-yellow-200",
    meaning: "Paralyzer of enemies, goddess of speech.",
    image: bagalamukhiImg,
  },
  {
    goddess: "Matangi",
    color: "bg-green-100",
    meaning: "Goddess of inner wisdom and speech.",
    image: matangiImg,
  },
  {
    goddess: "Kamala",
    color: "bg-orange-100",
    meaning: "Lotus goddess, form of Lakshmi (prosperity).",
    image: kamalaImg,
  },
];

const mahavidyaText = `The Dasa Mahavidya (Sanskrit: दस महाविद्या) literally means the “Ten Great Wisdom Goddesses” in Hinduism. They are ten powerful manifestations of Divine Mother (Shakti or Devi), each representing a unique aspect of cosmic power, spiritual knowledge, and transformation. These goddesses are especially significant in Tantric traditions and are often worshipped for spiritual liberation, protection, and insight. Key Points About Dasa Mahavidya: - They represent different spiritual paths—some are benevolent, some are fierce. - Worship can be for material benefits (like wealth, success) or spiritual growth (like liberation and wisdom). - Each Mahavidya has distinct iconography, mantras, and rituals. - The Dasa Mahavidya are considered Tantric forms of Goddess Durga, showing her cosmic and transcendent power.`;

const DasaMahavidya = () => {
  return (
    <FestivalGrid
      title="Dasa Mahavidya – 10 Great Wisdom Goddesses"
      text={mahavidyaText}
      items={mahavidyas}
    />
  );
};

export default DasaMahavidya;
