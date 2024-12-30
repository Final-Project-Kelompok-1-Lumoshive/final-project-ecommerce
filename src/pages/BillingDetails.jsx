import React from "react";
import BillingDetailsSection from "../components/BillingDetailsSection";
import BreadCrumbs from "../components/BreadCrumbs";

const BillingDetails = () => {
  return (
    <div>
      {/* Breadcrumbs need fixing */}
      <BreadCrumbs />
      <BillingDetailsSection />
    </div>
  );
};

export default BillingDetails;
