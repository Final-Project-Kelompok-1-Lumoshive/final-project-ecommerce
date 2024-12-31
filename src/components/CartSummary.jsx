import React from "react";
import { Link } from "react-router-dom";

const CartSummary = ({ subtotal, shipping, total }) => {
  return (
    <div className="border-2 border-black p-4 mb-4">
      <h3 className="text-lg font-bold mb-2">Cart Total</h3>
      <div className="flex justify-between border-b-2 mb-2 pb-1">
        <span>Subtotal:</span>
        <span>${subtotal}</span>
      </div>
      <div className="flex justify-between border-b-2 mb-2 pb-1">
        <span>Shipping:</span>
        <span>{shipping === 0 ? "Free" : `$ ${shipping}`}</span>
      </div>
      <div className="flex justify-between font-bold mb-2">
        <span>Total:</span>
        <span>${total}</span>
      </div>
      <Link
        to={"/checkout"}
        className="bg-red block w-1/2 text-center py-2 px-4 text-white rounded border-white border-2 hover:border-black transition-all duration-500"
      >
        Proceed to checkout
      </Link>
    </div>
  );
};

export default CartSummary;
