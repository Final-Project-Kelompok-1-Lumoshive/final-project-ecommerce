import React, { useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import Coupon from "./Coupon";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../redux/async/cartSlice";
import { Link } from "react-router-dom";

const CartSection = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleQuantityChange = (id, change, stock) => {
    dispatch(updateCartQuantity({ id, change, stock }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    console.log("Item removed from cart:", id);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = "Free";
  const total = subtotal;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <table className="min-w-full table-auto border-collapse mb-4">
        <thead>
          <tr className="shadow-md">
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
              onQuantityChange={(id, change) =>
                handleQuantityChange(id, change, item.stock)
              }
              onRemove={handleRemove}
            />
          ))}
        </tbody>
      </table>
      <Coupon />
      <CartSummary subtotal={subtotal} shipping={shipping} total={total} />
      <Link to={"/all-product"}>Return To Shop</Link>
    </div>
  );
};

export default CartSection;
