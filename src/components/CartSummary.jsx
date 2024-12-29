import React from "react";

const CartSummary = ({ subtotal, shipping, total }) => {
  return (
    <div>
      <h3>Cart Total</h3>
      <p>Subtotal: ${subtotal}</p>
      <p>Shipping: {shipping}</p>
      <p>Total: ${total}</p>
      <button>Proceed to checkout</button>
    </div>
  );
};

export default CartSummary;
