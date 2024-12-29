import React, { useState } from "react";

const Coupon = ({ onApply }) => {
  const [code, setCode] = useState("");

  const handleApply = () => {
    onApply(code);
    setCode(""); // Clear the input after applying
  };

  return (
    <div>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Coupon Code"
      />
      <button onClick={handleApply}>Apply Coupon</button>
    </div>
  );
};

export default Coupon;
