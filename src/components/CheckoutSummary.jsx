import React from "react";
import { useSelector } from "react-redux";

const CheckoutSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Shipping
  const shipping = 0;

  // Total
  const total = subtotal + shipping;

  return (
    <div>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between mb-2">
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 object-cover rounded"
              />
              <span>{item.title}</span>
            </div>
            <div className="flex items-center">
              ${item.price * item.quantity}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-between border-b-2 py-2">
        <span>Subtotal:</span>
        <span>${subtotal}</span>
      </div>
      <div className="flex justify-between border-b-2 py-2  ">
        <span>Shipping:</span>
        <span>{shipping === 0 ? "Free" : `$ ${shipping}`}</span>
      </div>
      <div className="flex justify-between font-bold py-2">
        <span>Total:</span>
        <span>${total}</span>
      </div>
    </div>
  );
};

export default CheckoutSummary;
