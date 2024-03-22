import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
//import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
//import Trade from "./pages/Trade";
import ViewProduct from "./pages/ViewProduct";
//import About from "./pages/About";
//import Contact from "./components/Contact";
//import Mining from "./pages/Mining";
//import Logistics from "./pages/Logistics";
import React, { Suspense, useEffect } from "react";
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Trade = React.lazy(() => import("./pages/Trade"));
const Mining = React.lazy(() => import("./pages/Mining"));
const Logistics = React.lazy(() => import("./pages/Logistics"));
const AboutNew = React.lazy(() => import("./pages/AboutNew"));
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
      <Suspense
        fallback={
          <div className="w-full h-[100vh] flex items-center justify-center font-bold text-4xl   ">
            <p>Loading...</p>
          </div>
        }
      >
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
          <Route path="/about/new" element={<AboutNew />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
