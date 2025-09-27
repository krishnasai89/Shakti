import React from "react";
import FestivalGrid from "./FestivalGrid";
import brahmaniImg from "../assets/gallery/Ashta_Matrikas/Brahmani.png";

const matrikas = [
  {
    goddess: "Brahmani",
    color: "bg-yellow-100",
    meaning: "Shakti of Brahma, goddess of wisdom.",
    direction: "East",
    image: brahmaniImg,
  },
];

const Ashta_Matrikas = () => {
  const Ashta_Matrikas_text = `The Ashta Matrikas (Sanskrit: अष्टमातृका) literally means the “Eight Mother Goddesses” in Hinduism, each representing the power of a major male deity. They are considered protectors of the universe and symbolize strength, courage, and divine energy. Worshiping them is believed to give protection, prosperity, and victory over evil.They are considered protectors of the universe, often called upon in battles or to remove negativity.Each Matrika represents the feminine power of a male god.Sometimes, they are depicted together as a group, often surrounding Shiva or Durga in tantric iconography.Worshiping them is believed to bring strength, courage, and protection from enemies or evil forces.`;

  return (
    <section className="bg-gradient-to-r from-red-50 to-pink-50 py-12">
      <FestivalGrid
        title="Dasa Mahavidya – 10 Great Wisdom Goddesses"
        text={Ashta_Matrikas_text}
        items={matrikas}
      />
    </section>
  );
};

export default Ashta_Matrikas;
