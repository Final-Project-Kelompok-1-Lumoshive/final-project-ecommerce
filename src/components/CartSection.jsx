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
    <div className="container mx-auto p-4 font-poppins">
      <table className="min-w-full table-auto border-collapse mb-4">
        <thead>
          <tr className="shadow">
            <th className="w-1/2 text-left py-2 px-4 font-normal">Product</th>
            <th className="w-1/6 text-center py-2 px-4 font-normal">Price</th>
            <th className="w-1/6 text-center py-2 px-4 font-normal">
              Quantity
            </th>
            <th className="w-1/6 text-center py-2 px-4 font-normal">
              Subtotal
            </th>
            <th className="w-1/6 text-center py-2 px-4 font-normal">Action</th>
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
