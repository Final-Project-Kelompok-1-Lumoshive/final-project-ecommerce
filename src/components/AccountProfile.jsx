import React from "react";

const AccountProfile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="flex flex-col gap-4 w-full rounded-xl lg:shadow lg:min-h-[36rem] py-8 lg:px-16 px-2">
      <h5 className="font-poppins text-lg font-medium text-red">
        Edit Your Profile
      </h5>
      <form className="flex flex-col justify-between h-full gap-6">
        <div className="flex flex-col gap-6">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-3">
            <div className="flex flex-col gap-3">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                placeholder="your name"
                id="fullName"
                name="fullName"
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
                className="bg-[#F5F5F5] border-none focus:outline-0 rounded-md py-3 px-3 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label>Password Changes</label>
            <input
              type="text"
              placeholder="Current Password"
              className="bg-[#F5F5F5] border-none focus:outline-0 rounded-md py-3 px-3 w-full"
            />
            <input
              type="password"
              placeholder="New Password"
              className="bg-[#F5F5F5] border-none focus:outline-0 rounded-md py-3 px-3 w-full"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="bg-[#F5F5F5] border-none focus:outline-0 rounded-md py-3 px-3 w-full"
            />
          </div>
        </div>
        <div className="font-poppins flex justify-end items-center gap-4">
          <button disabled>Cancel</button>
          <button onClick={handleSubmit} className="bg-red font-medium text-white px-6 py-3 rounded">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountProfile;
