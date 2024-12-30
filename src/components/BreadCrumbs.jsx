import React from "react";
import { Link } from "react-router-dom";

function BreadCrumbs({ linkError, sku }) {
  if (window.location.pathname === "/about") {
    return (
      <div className="font-poppins flex gap-3">
        <Link to="/" className="opacity-50">Home</Link>
        <p className="opacity-50">/</p>
        <p>About</p>
      </div>
    );
  } else if (window.location.pathname === "/contact") {
    return (
      <div className="font-poppins flex gap-3">
        <Link to="/" className="opacity-50">Home</Link>
        <p className="opacity-50">/</p>
        <p>Contact</p>
      </div>
    );
  } else if (
    window.location.pathname === "/account/profile" ||
    window.location.pathname === "/account/address" ||
    window.location.pathname === "/account/order"
  ) {
    return (
      <div className="font-poppins flex gap-3">
        <Link to="/" className="opacity-50">Home</Link>
        <p className="opacity-50">/</p>
        <p>My Account</p>
      </div>
    );
  } else if (window.location.pathname === "/error") {
    return (
      <div className="font-poppins flex gap-3">
        <Link to="/" className="opacity-50">Home</Link>
        <p className="opacity-50">/</p>
        <p>{linkError} Error</p>
      </div>
    );
  } else if (window.location.pathname === `/product/${sku}`) {
    return (
      <div className="font-poppins flex gap-3">
        <Link to="/" className="opacity-50">Home</Link>
        <p className="opacity-50">/</p>
        <p>{sku}</p>
      </div>
    );
  }
}

export default BreadCrumbs;
