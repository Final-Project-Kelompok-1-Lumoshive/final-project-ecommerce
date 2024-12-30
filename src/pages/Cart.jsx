import React from "react";
import CartSection from "../components/CartSection";
import BreadCrumbs from "../components/BreadCrumbs";

const Cart = () => {
  return (
    <div>
      {/* Breadcrumbs need fixing */}
      <BreadCrumbs />
      <CartSection />
    </div>
  );
};

export default Cart;
