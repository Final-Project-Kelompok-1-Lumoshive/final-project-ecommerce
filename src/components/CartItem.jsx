import React from "react";

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const { title, image, price, quantity } = item;

  return (
    <tr className="border-b hover:bg-gray-100">
      <td className="flex items-center space-x-4 py-4">
        <img
          className="object-cover w-20 h-20 rounded"
          src={image}
          alt={title}
        />
        <span className="text-left font-medium">{title}</span>
      </td>
      <td className="text-center text-gray-800">${price}</td>
      <td className="flex items-center justify-center space-x-2">
        <button
          className="bg-gray-300 text-gray-700 rounded px-2 py-1 hover:bg-gray-400"
          onClick={() => onQuantityChange(item.id, -1)}
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="font-semibold">{quantity}</span>
        <button
          className="bg-gray-300 text-gray-700 rounded px-2 py-1 hover:bg-gray-400"
          onClick={() => onQuantityChange(item.id, 1)}
        >
          +
        </button>
      </td>
      <td className="text-center text-gray-800">${price * quantity}</td>
      <td className="text-center">
        <button
          className="text-red-600 hover:text-red-800 font-semibold"
          onClick={() => onRemove(item.id)}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
