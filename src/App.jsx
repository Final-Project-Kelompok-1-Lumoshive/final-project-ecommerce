import React, { useEffect } from "react";
import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Wishlist from "./pages/Wishlist";
import BestSelling from "./pages/BestSelling";
import AllProduct from "./pages/AllProduct";
import Cart from "./pages/Cart";
import BillingDetails from "./pages/BillingDetails";
import OrderSuccess from "./pages/OrderSuccess";
import ProductDetail from "./pages/ProductDetail";
import ProtectedRoute from "./components/ProtectedRoute";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="pb-24">
        <Navbar />
      </div>
      <div className="lg:mx-24 mx-6 my-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account/profile" element={<ProtectedRoute><Account /></ProtectedRoute>} />
          <Route path="/account/address" element={<ProtectedRoute><Account /></ProtectedRoute>} />
          <Route path="/account/order" element={<ProtectedRoute><Account /></ProtectedRoute>} />
          <Route path="/error" element={<Error />} />
          <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
          <Route path="/best-selling" element={<BestSelling />} />
          <Route path="/all-product" element={<AllProduct />} />
          <Route path="/checkout" element={<BillingDetails />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/product/:sku" element={<ProductDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
