import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa6";

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const { title, image, price, quantity } = item;

  console.log("cart image: ", image);

  return (
    <tr className="border-b hover:bg-gray-100 shadow">
      <td className="flex flex-col sm:flex-row items-center space-x-4 py-2">
        <div className="relative m-4">
          <img
            className="object-cover w-20 h-20 rounded"
            src={image[0]}
            alt={title}
          />
          <button
            className="absolute -top-2 -left-2 bg-white rounded-full"
            onClick={() => onRemove(item.id)}
          >
            <IoCloseCircle
              className="text-red hover:opacity-80 hover:scale-105 transition-all duration-500"
              size={25}
            />
          </button>
        </div>
        <span className="text-left font-medium">{title}</span>
      </td>
      <td className="text-center text-gray-800">${price}</td>
      <td>
        <div className="flex items-center justify-center">
          <button
            className="flex items-center justify-center text-black px-2 py-2 w-10 hover:bg-red hover:bg-opacity-90 border hover:text-white border-black rounded-tl rounded-bl"
            onClick={() => onQuantityChange(item.id, -1)}
            disabled={quantity <= 1}
          >
            <FaMinus />
          </button>
          <span className="font-semibold px-2 w-10 text-center py-[0.25rem] border-t border-b border-black">
            {quantity}
          </span>
          <button
            className="flex items-center justify-center text-black w-10 px-2 py-2 hover:bg-red hover:text-white border border-black rounded-tr rounded-br"
            onClick={() => onQuantityChange(item.id, 1)}
          >
            <FaPlus />
          </button>
        </div>
      </td>
      <td className="text-center text-gray-800">${price * quantity}</td>
    </tr>
  );
};

export default CartItem;
