import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/header";
import Services from "./components/Services";
import About from "./components/about";
import Hero from "./components/hero";
import PortfolioImages from "./components/portfolioImages";
import PortfolioStart from "./components/portfolioStart";
import Footer from "./components/footer"


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Hero />
        <Services />
        <PortfolioStart />
        <PortfolioImages />
        <About />
        <Footer/>

        
      </div>
    </Router>
  );
}

export default App;
