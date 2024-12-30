import React from "react";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const { title, image, price, quantity } = item;

  return (
    <tr className="border-b hover:bg-gray-100 shadow">
      <td className="flex items-center space-x-4 py-4">
        <img
          className="object-cover w-20 h-20 rounded"
          src={image}
          alt={title}
        />
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
      <td className="text-center">
        <button className="px-2" onClick={() => onRemove(item.id)}>
          <FaTrash className="text-black hover:text-orange-600" size={20} />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
