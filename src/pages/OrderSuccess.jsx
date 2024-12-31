import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import CheckoutSummary from "../components/CheckoutSummary";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div>
      {/* Breadcrumbs need fixing */}
      <BreadCrumbs />

      <div className="max-w-xl mx-auto p-6 font-poppins">
        <h2 className="text-3xl text-center font-inter font-semibold mb-8">
          Order Success
        </h2>
        <CheckoutSummary />

        {/* Back to Home Button */}
        <Link
          to={"/"}
          className="w-full block text-center bg-red py-2 px-4 my-4 text-white rounded border-white border-2 hover:border-black transition-all duration-500"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
