import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
