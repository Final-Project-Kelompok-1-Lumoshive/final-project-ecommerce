import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Auth from "./pages/Auth";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <div className="pb-20">
        <Navbar />
      </div>
      <div className="mx-32 my-32 ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
