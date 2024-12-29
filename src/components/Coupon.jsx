import React, { useState } from "react";

const Coupon = () => {
  const [code, setCode] = useState("");

  return (
    <div>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Coupon Code"
      />
      <button>Apply Coupon</button>
    </div>
  );
};

export default Coupon;
