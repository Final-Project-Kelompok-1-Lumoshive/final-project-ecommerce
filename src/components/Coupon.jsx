import React, { useState } from "react";

const Coupon = () => {
  const [code, setCode] = useState("");

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Coupon Code"
        className="border border-gray-900 rounded px-2 py-2"
      />
      <button className="bg-red text-white rounded px-4 py-2 hover:bg-orange-600">
        Apply Coupon
      </button>
    </div>
  );
};

export default Coupon;
