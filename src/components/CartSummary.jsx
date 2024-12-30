import React from "react";

const CartSummary = ({ subtotal, shipping, total }) => {
  return (
    <div className="border p-4 mb-4">
      <h3 className="text-lg font-bold mb-2">Cart Total</h3>
      <div className="flex justify-between border-b-2 mb-2 pb-1">
        <span>Subtotal:</span>
        <span>${subtotal}</span>
      </div>
      <div className="flex justify-between border-b-2 mb-2 pb-1">
        <span>Shipping:</span>
        <span>{shipping}</span>
      </div>
      <div className="flex justify-between font-bold mb-2">
        <span>Total:</span>
        <span>${total}</span>
      </div>
      <button className="bg-red py-2 px-4 text-white ms-2 rounded">
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartSummary;
