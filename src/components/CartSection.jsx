import React, { useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import Coupon from "./Coupon";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../redux/async/cartSlice";

const CartSection = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleQuantityChange = (id, change) => {
    dispatch(updateCartQuantity({ id, change }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleApplyCoupon = (code) => {
    // Logic to apply coupon
    console.log("Coupon applied:", code);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = "Free"; // You can implement shipping logic here
  const total = subtotal; // Adjust this if you have discounts

  return (
    <div>
      <h2>Your Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove}
            />
          ))}
        </tbody>
      </table>
      <Coupon onApply={handleApplyCoupon} />
      <CartSummary subtotal={subtotal} shipping={shipping} total={total} />
      <button>Return To Shop</button>
    </div>
  );
};

export default CartSection;
