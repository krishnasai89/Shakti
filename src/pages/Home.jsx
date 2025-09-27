import React from "react";
import Header from "../components/Header";
import Navratri from "../components/Navratri";
import Dasa_Mahavidya from "../components/Dasa_Mahavidya";
import Ashta_Matrikas from "../components/Ashta_Matrikas";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Header />
      {/* Navratri 9 Days Section */}
      <Navratri />
      {/* Dasa Mahavidya Section */}
      <Dasa_Mahavidya />
      {/* Ashta Matrikas Section */}
      <Ashta_Matrikas />
    </div>
  );
};

export default Home;
