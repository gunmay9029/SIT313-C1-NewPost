
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortfolioSection from "./components/PortfolioSection";
import FeaturedArticles from "./components/FeaturedArticles";
import FeaturedTutorials from "./components/FeaturedTutorials";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";

// Displays the existing P3 home page.
function Home() {
  return (
    <main>
      <Hero />
      <PortfolioSection />
      <FeaturedArticles />
      <FeaturedTutorials />
    </main>
  );
}

// Keeps the navigation and footer consistent across pages.
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
