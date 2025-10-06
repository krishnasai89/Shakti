import React from "react";
import Header from "../components/Header";
import Navratri from "../components/Navratri";
import Dasa_Mahavidya from "../components/Dasa_Mahavidya";
import Ashta_Matrikas from "../components/Ashta_Matrikas";
import Parvati from "../components/Parvati";
import AshtaLakshmi from "../components/AshtaLakshmi";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Header />
      {/* Parvati  */}
      <Parvati />
      {/* Navratri 9 Days Section */}
      <Navratri />
      {/* Dasa Mahavidya Section */}
      <Dasa_Mahavidya />
      {/* Ashta Matrikas Section */}
      <Ashta_Matrikas />
      {/* AshtaLakshmi  section */}
      <AshtaLakshmi />
    </div>
  );
};

export default Home;
