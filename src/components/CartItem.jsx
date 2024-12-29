import React from "react";

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const { title, price, quantity } = item;

  return (
    <tr>
      <td>{title}</td>
      <td>${price}</td>
      <td>
        <button onClick={() => onQuantityChange(item.id, -1)}>-</button>
        {quantity}
        <button onClick={() => onQuantityChange(item.id, 1)}>+</button>
      </td>
      <td>${price * quantity}</td>
      <td>
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </td>
    </tr>
  );
};

export default CartItem;
