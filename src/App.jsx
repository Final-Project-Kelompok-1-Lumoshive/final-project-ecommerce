import React, { useEffect, lazy, Suspense } from "react";
import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import { MetadataProvider } from "./context/MetaDataContext";

// Lazy loading components
const Auth = lazy(() => import("./pages/Auth"));
const About = lazy(() => import("./pages/About"));
const Account = lazy(() => import("./pages/Account"));
const Contact = lazy(() => import("./pages/Contact"));
const Error = lazy(() => import("./pages/Error"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const BestSelling = lazy(() => import("./pages/BestSelling"));
const AllProduct = lazy(() => import("./pages/AllProduct"));
const Cart = lazy(() => import("./pages/Cart"));
const BillingDetails = lazy(() => import("./pages/BillingDetails"));
const OrderSuccess = lazy(() => import("./pages/OrderSuccess"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <MetadataProvider>
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
            <Route
              path="/account/profile"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account/address"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account/order"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route path="/error" element={<Error />} />
            <Route
              path="/wishlist"
              element={
                <ProtectedRoute>
                  <Wishlist />
                </ProtectedRoute>
              }
            />
            <Route path="/best-selling" element={<BestSelling />} />
            <Route path="/all-product" element={<AllProduct />} />
            <Route path="/checkout" element={<BillingDetails />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route path="/product/:sku" element={<ProductDetail />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </MetadataProvider>
  );
};

export default App;
