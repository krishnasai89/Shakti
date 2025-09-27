import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Peethas from "./pages/Peethas";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* Navigation */}
        <Navbar />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/peethas" element={<Peethas />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={"<Contact />"} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
