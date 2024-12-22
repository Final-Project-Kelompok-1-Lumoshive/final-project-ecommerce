import React, { useState } from "react";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";

import { FaPlus } from "react-icons/fa6";

import trash from "../assets/trash.svg";
import editbox from "../assets/editbox.svg";

const AccountAddress = () => {
  const { addresses } = useSelector((state) => state.fetch);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  // const [currentAddressId, setCurrentAddressId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);
    setFormData({
      ...formData,
      [name]: sanitizedValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormOpen) {
      setIsFormOpen(false);
    } else if (isUpdate) {
      setIsFormOpen(true);
      setIsUpdate(false);
    } else {
      setIsFormOpen(true);
    }
    setFormData({
      fullName: "",
      email: "",
      address: "",
    });
  };

  const handleUpdate = (address) => {
    setFormData({
      fullName: address.name,
      email: address.email,
      address: address.address,
    });
    // setCurrentAddressId(address.id);
    setIsFormOpen(true);
    setIsUpdate(true);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsFormOpen(false);
    setIsUpdate(false);
  };
  return (
    <div className="flex flex-col gap-4 w-full rounded-xl lg:shadow lg:min-h-[36rem] py-8 lg:px-16 px-2">
      <div className="flex justify-between w-full items-center font-poppins text-lg font-medium text-red">
        <p>
        {!isFormOpen ? (
          "Your Address"
        ) : (
          <>{isUpdate ? "Update Your Address" : "Create Your Address"}</>
        )}
        </p>
        <button onClick={handleSubmit} className={`${isFormOpen ? "hidden" : "flex"} md:hidden justify-center items-center w-8 h-8 rounded-full bg-red text-white`}><FaPlus/></button>
      </div>
      <form className="flex flex-col justify-between h-full gap-6">
        {/* Form create and update */}
        {isFormOpen ? (
          <div className="flex flex-col gap-6">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-3">
              <div className="flex flex-col gap-3">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  placeholder="your name"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="bg-[#F5F5F5] border-none focus:outline-0 rounded-md py-3 px-3 w-full"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#F5F5F5] border-none focus:outline-0 rounded-md py-3 px-3 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label>Address</label>
              <textarea
                type="text"
                placeholder="Current Password"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="bg-[#F5F5F5] border-none focus:outline-0 rounded-md py-3 px-3 w-full min-h-[10rem]"
                style={{ resize: "none" }}
              />
            </div>
          </div>
        ) : (
          // Address List
          <div className="flex flex-col gap-4">
            {addresses.map((address) => (
              <div
                key={address.id}
                className="flex justify-between items-center bg-[#F5F5F5] py-3 px-4"
              >
                <div className="font-poppins">
                  <p className="font-semibold">
                    {address.name} | {address.email}
                  </p>
                  <p>{address.address}</p>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => handleUpdate(address)}>
                    <img src={editbox} className="min-w-6" />
                  </button>
                  <button>
                    <img src={trash} className="min-w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="font-poppins flex justify-end items-center gap-4">
          <button
            onClick={handleCancel}
            className={isFormOpen ? "flex" : "hidden"}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className={`${!isFormOpen && "md:flex hidden"} bg-red font-medium text-white px-6 py-3 rounded`}
          >
            {!isFormOpen ? (
          "Add New Address"
        ) : (
          <>{isUpdate ? "Save Changes" : "Add"}</>
        )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountAddress;
