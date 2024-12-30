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
      {/* Products Table */}
      <table className="min-w-full table-auto border-collapse mb-4">
        <thead>
          <tr className="shadow">
            <th scope="col" className="w-1/2 text-left py-2 px-4 font-normal">
              Product
            </th>
            <th scope="col" className="w-1/6 text-center py-2 px-4 font-normal">
              Price
            </th>
            <th scope="col" className="w-1/6 text-center py-2 px-4 font-normal">
              Quantity
            </th>
            <th scope="col" className="w-1/6 text-center py-2 px-4 font-normal">
              Subtotal
            </th>
            <th scope="col" className="w-1/6 text-center py-2 px-4 font-normal">
              <span className="sr-only">Action</span>
            </th>
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
      {/* Left Side */}
      <Link to={"/all-product"} className="border-gray-900 border p-4 my-2">
        Return To Shop
      </Link>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex justify-between mb-4 w-1/2">
          <Coupon />
        </div>

        {/* Right Side */}
        {/* Cart Summary Section */}
        <div className="w-1/2">
          <CartSummary subtotal={subtotal} shipping={shipping} total={total} />
        </div>
      </div>
    </div>
  );
};

export default CartSection;
