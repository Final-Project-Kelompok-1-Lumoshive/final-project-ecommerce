import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa6";
import CheckoutSummary from "./CheckoutSummary";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BillingDetailsSection = () => {
  const { name, address, email } = useSelector(
    (state) => state.fetch.addresses[0]
  );

  return (
    <div className="max-w-7xl mx-auto p-6 font-poppins">
      {/* Billing Details Section */}
      <h2 className="text-3xl font-inter font-semibold mb-4">
        Billing Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          {/* Address */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-red mb-2">
              Your Address
            </h2>
            <div className="p-4 bg-slate-100 rounded-lg shadow-sm">
              <p className="font-semibold">
                {name} | {email}
              </p>
              <p className="text-gray-500">{address}</p>
              <FaRegEdit className="cursor-pointer hover:text-red" size={20} />
            </div>
          </div>

          {/* Shipping */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-red mb-2">
              Your Shipping
            </h2>
            <div className="p-4 bg-slate-100 rounded-lg shadow-sm">
              <p className="font-semibold">Regular Shipping</p>
              <p className="text-gray-500">
                Get voucher if your order doesn't arrive by 19 Nov 2025.
              </p>
            </div>
          </div>

          {/* Note */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-red mb-2">Your Note</h2>
            <textarea
              placeholder="Message for Sellers"
              className="w-full p-3 border rounded-lg shadow-sm"
            ></textarea>
          </div>
        </div>

        {/* Right Section */}
        <div>
          {/* Checkout Summary */}
          <CheckoutSummary />

          {/* Payment Method */}
          <div className="my-6">
            <div className="flex flex-col items-start gap-y-4">
              <label className="flex items-center justify-between">
                <input
                  type="radio"
                  name="payment"
                  className="mr-2"
                  defaultChecked
                />
                Bank
                <span className="flex items-center w-28 mx-8 gap-2">
                  <FaCcMastercard size={25} />
                  <RiVisaLine size={25} />
                </span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-2" />
                Cash on delivery
              </label>
            </div>
          </div>

          {/* Place Order Button */}
          <Link
            to={"/order-success"}
            className="w-52 block text-center bg-red py-2 px-4 text-white rounded border-white border-2 hover:border-black transition-all duration-500"
          >
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BillingDetailsSection;
