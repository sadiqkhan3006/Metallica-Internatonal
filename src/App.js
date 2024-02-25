import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Trade from "./pages/Trade";
import ViewProduct from "./pages/ViewProduct";
import About from "./pages/About";
import Contact from "./components/Contact";
import Mining from "./pages/Mining";
import Logistics from "./pages/Logistics";
import { useEffect } from "react";
function ScrollToTopOnNavigate() {
  const location = useLocation();
  console.log("Location:", location.pathname);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      <ScrollToTopOnNavigate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/trading" element={<Trade />} />
        <Route
          path="/services/trading/product/:productId"
          element={<ViewProduct />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/mining" element={<Mining />} />
        <Route path="/services/logistics" element={<Logistics />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
