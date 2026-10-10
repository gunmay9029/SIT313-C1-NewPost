
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortfolioSection from "./components/PortfolioSection";
import FeaturedArticles from "./components/FeaturedArticles";
import FeaturedTutorials from "./components/FeaturedTutorials";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <PortfolioSection />
        <FeaturedArticles />
        <FeaturedTutorials />
      </main>

      <Footer />
    </>
  );
}

export default App;
