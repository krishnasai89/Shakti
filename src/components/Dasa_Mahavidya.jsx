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
    description:
      "The supreme goddess of time, change, and destruction. She destroys evil and liberates souls from the cycle of birth and death.",
    image: kaliImg,
    direction: "South",
    preposition: "Beyond Time",
  },
  {
    goddess: "Tara",
    color: "bg-blue-100",
    description:
      "The compassionate guide who offers protection and knowledge. Tara removes fear and grants salvation.",
    direction: "North",
    preposition: "Guide",
    image: taraImg,
  },
  {
    goddess: "Tripura Sundari (Shodashi)",
    color: "bg-pink-100",
    description:
      "The Beautiful Goddess of the Three Worlds. Embodiment of beauty, bliss, and the ultimate truth.",
    direction: "Center",
    preposition: "Supreme Beauty & Bliss",
    image: tripuraSundariImg,
  },
  {
    goddess: "Bhuvaneshwari",
    color: "bg-yellow-100",
    description:
      "The Queen of the Universe, who governs creation and cosmic order. She embodies the vastness of space.",
    direction: "East",
    preposition: "Space & Creation",
    image: bhuvaneshwariImg,
  },
  {
    goddess: "Bhairavi",
    color: "bg-red-200",
    description:
      "The fierce goddess of divine wrath, discipline, and transformation. She represents spiritual awakening.",
    direction: "Southeast",
    preposition: "Discipline & Energy",
    image: bhairaviImg,
  },
  {
    goddess: "Chinnamasta",
    color: "bg-purple-100",
    description:
      "The self-decapitated goddess symbolizing self-sacrifice, detachment, and transcendence of ego.",
    direction: "Northwest",
    preposition: "Self-Sacrifice and transcendence",
    image: chinnamastaImg,
  },
  {
    goddess: "Dhumavati",
    color: "bg-gray-300",
    description:
      "The widow goddess representing detachment, letting go, and the void. She teaches wisdom through loss.",
    direction: "Southwest",
    preposition: "Detachment & Wisdom",
    image: dhumavatiImg,
  },
  {
    goddess: "Bagalamukhi",
    color: "bg-yellow-200",
    description:
      "The paralyzer of enemies and controller of speech. She grants victory in debates and silence to negativity.",
    direction: "West",
    preposition: "Power of Speech and Paralyzer of enemies",
    image: bagalamukhiImg,
  },
  {
    goddess: "Matangi",
    color: "bg-green-100",
    description:
      "The goddess of inner wisdom, music, and speech. Patron of learning and creativity.",
    direction: "Northeast",
    preposition: "Wisdom & Expression",
    image: matangiImg,
  },
  {
    goddess: "Kamala",
    color: "bg-orange-100",
    description:
      "The lotus goddess of prosperity, purity, and compassion. She represents the wealth and grace of Lakshmi.",
    direction: "Everywhere (All Directions)",
    preposition: "Prosperity & Grace",
    image: kamalaImg,
  },
];

const mahavidyaText = `
    The Dasa Mahavidya (Ten Great Wisdom Goddesses) are ten forms of the Divine Mother, 
    symbolizing different aspects of cosmic power and spiritual wisdom. They guide devotees 
    toward liberation, protection, and transformation.
    The Dasa Mahavidya story describes how Goddess Sati, in a fit of anger and to prove her 
    divine status to her husband Shiva, manifests as ten terrifying forms (the Dasa Mahavidyas) 
    to prevent Shiva from leaving after he forbids her from attending her father Daksha's sacrificial ceremony. 
    Sati feels Shiva is treating her as an ordinary woman and not the Mother of the Universe, leading her to 
    demonstrate her true, supreme power by creating these ten forms, one for each direction, thus blocking Shiva's 
    escape and making him aware of her infinite, divine might.
`;

const DasaMahavidya = () => {
  return (
    <FestivalGrid
      title="Dasa Mahavidya – 10 Great Wisdom Goddesses"
      text={mahavidyaText}
      items={mahavidyas}
      videoSrc="https://www.instagram.com/reel/DOWdLy0Erse/embed"
      imgSrc={""}
    />
  );
};

export default DasaMahavidya;
