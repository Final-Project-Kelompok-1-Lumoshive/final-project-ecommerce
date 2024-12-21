import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Account from "./pages/Account";

const App = () => {
  return (
    <Router>
      <div className="pb-24">
      <Navbar />
      </div>
      <div className="lg:mx-24 md:mx-8 mx-4 my-32">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/about" element={<About />} />
        <Route path="/account/profile" element={<Account />} />
        <Route path="/account/address" element={<Account />} />
        <Route path="/account/order" element={<Account />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;