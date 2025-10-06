import React from "react";
import FestivalGrid from "./FestivalGrid";
import brahmaniImg from "../assets/gallery/Ashta_Matrikas/Brahmani.png";
// Add remaining 7 images later

const matrikas = [
  {
    goddess: "Brahmani",
    color: "bg-yellow-100",
    description:
      "The shakti of Brahma, the creator god. Brahmani represents the creative energy of the universe and is depicted with four heads like Brahma.",
    direction: "East",
    preposition: "Creation & goddess of wisdom",
    image: brahmaniImg,
  },
  {
    goddess: "Vaishnavi",
    color: "bg-blue-100",
    description:
      "The shakti of Vishnu, the preserver god. Vaishnavi represents protection, preservation, and sustenance of the universe. She is depicted with four arms holding Vishnu's weapons like a conch, discus, and mace.",
    direction: "West",
    preposition: "Preservation & goddess of strength",
    image: "",
  },
  {
    goddess: "Maheshvari",
    color: "bg-gray-100",
    description:
      "The shakti of Shiva, the destroyer god. Maheshvari represents the transformative energy of the universe and is depicted holding a trident and damaru(crescent moon).",
    direction: "South",
    preposition: "Destruction & goddess of power",
    image: "",
  },
  {
    goddess: "Indrani",
    color: "bg-indigo-100",
    description:
      "The shakti of Indra, the king of gods. Indrani represents power, authority, courage, leadership, and control over rain and thunder and is depicted holding a vajra (thunderbolt) and riding an elephant.",
    direction: "North",
    preposition: "Leadership & goddess of courage",
    image: "",
  },
  {
    goddess: "Kaumari",
    color: "bg-red-100",
    description:
      "The shakti of Kumara (Kartikey). Kaumari represents war, victory, and valor, often depicted riding a peacock with a spear in her hand.",
    direction: "Southeast",
    preposition: "Courage, Valor & goddess of war",
    image: "",
  },
  {
    goddess: "Varahi",
    color: "bg-pink-100",
    description:
      "The shakti of Varaha (Vishnu's boar avatar). Varahi symbolizes protection, strength, and power to eliminate evil, often depicted with a boar face.",
    direction: "Southwest",
    preposition: "Protection & goddess of power",
    image: "",
  },
  {
    goddess: "Chamunda",
    color: "bg-purple-100",
    description:
      "The fierce form of Devi, slayer of demons Chanda and Munda. Chamunda represents destruction of evil and fearlessness, often depicted with skulls.",
    direction: "Northwest",
    preposition: "Destruction of evil & goddess of courage",
    image: "",
  },
  {
    goddess: "Pratyangira/ Narasimhi",
    color: "bg-orange-200",
    description:
      "The shakti of Narasimha (Vishnu's boar avatar). The fierce goddess who protects from evil, black magic, and negative energies. She is depicted with a lion’s face and human body, symbolizing power, courage, and protection.",
    direction: "Center / South",
    preposition: "Protection & destruction of evil",
    image: "",
  },
];

const text = `The Ashta Matrikas (Eight Mother Goddesses) represent the powers of major deities. They are protectors of the universe and symbolize divine strength, courage, and protection against evil. \n The story of the Ashta Matrikas originates from Hindu mythology, where they are fierce, mother-like goddesses who emerged from the energies of the major deities to combat the demon Andhakasura. As Shiva fought Andhakasura, each drop of blood from the demon created more demons, so the Matrikas were formed to drink the blood and stop the proliferation. After defeating the demon, they were intended to protect the world, becoming revered figures in temples and representing divine feminine energy and power. `;

const AshtaMatrikas = () => {
  return (
    <FestivalGrid
      title="Ashta Matrikas – 8 Mother Goddesses"
      text={text}
      items={matrikas}
    />
  );
};

export default AshtaMatrikas;
