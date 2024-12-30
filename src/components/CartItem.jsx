import React from "react";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const { title, image, price, quantity } = item;

  return (
    <tr className="border-b hover:bg-gray-100 shadow">
      <td className="flex items-center space-x-4 py-2">
        <div className="relative m-4">
          <img
            className="object-cover w-20 h-20 rounded"
            src={image}
            alt={title}
          />
          <button
            className="absolute -top-2 -left-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-200"
            onClick={() => onRemove(item.id)}
          >
            <FaTrash className="text-black hover:text-orange-600" size={16} />
          </button>
        </div>
        <span className="text-left font-medium">{title}</span>
      </td>
      <td className="text-center text-gray-800">${price}</td>
      <td>
        <div className="flex items-center justify-center">
          <button
            className="text-black px-2 py-1 hover:bg-gray-400 border"
            onClick={() => onQuantityChange(item.id, -1)}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="font-semibold px-6 py-[0.3rem] border">
            {quantity}
          </span>
          <button
            className="text-black  px-2 py-1 hover:bg-gray-400 border"
            onClick={() => onQuantityChange(item.id, 1)}
          >
            +
          </button>
        </div>
      </td>
      <td className="text-center text-gray-800">${price * quantity}</td>
    </tr>
  );
};

export default CartItem;
