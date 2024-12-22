import React from "react";
import { Link, useLocation } from "react-router-dom";
import AccountProfile from "../components/AccountProfile";
import AccountAddress from "../components/AccountAddress";
import AccountOrders from "../components/AccountOrders";
import BreadCrumbs from "../components/BreadCrumbs";

const Account = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex flex-col lg:gap-12 gap-8">
      <div className="font-poppins flex justify-between">
        <BreadCrumbs />
        <p className="lg:flex hidden">
          Welcome!<span className="text-red ms-1">Name</span>
        </p>
      </div>
      <div className="flex lg:justify-between lg:flex-row flex-col max-lg:gap-8">
        <div className="lg:hidden flex flex-wrap gap-2">
          <Link
            to={"/account/profile"}
            className={`${
              path === "/account/profile" ? "text-white bg-red border-red" : ""
            } border-2 border-black/[.5] rounded px-3 py-2 min-w-28 text-center`}
          >
            My Profile
          </Link>
          <Link
            to={"/account/address"}
            className={`${
              path === "/account/address" ? "text-white bg-red border-red" : ""
            } border-2 border-black/[.5] rounded px-3 py-2 min-w-28 text-center`}
          >
            Address Book
          </Link>
          <Link
            to={"/account/order"}
            className={`${
              path === "/account/order" ? "text-white bg-red border-red" : ""
            } border-2 border-black/[.5] rounded px-3 py-2 min-w-28 text-center`}
          >
            My Orders
          </Link>
        </div>
        <div className="font-poppins lg:flex hidden flex-col gap-4 min-w-64">
          <p className="font-medium">Manage My Account</p>
          <div className="flex flex-col text-black/[.5] gap-2 ml-6">
            <Link
              to={"/account/profile"}
              className={path === "/account/profile" ? "text-red" : ""}
            >
              My Profile
            </Link>
            <Link
              to={"/account/address"}
              className={path === "/account/address" ? "text-red" : ""}
            >
              Address Book
            </Link>
          </div>
          <p className="font-medium">My Orders</p>
          <Link
            to={"/account/order"}
            className={`${
              path === "/account/order" ? "text-red" : "text-black/[.5]"
            } ml-6`}
          >
            My Orders
          </Link>
        </div>
        {path === "/account/profile" && <AccountProfile />}
        {path === "/account/address" && <AccountAddress />}
        {path === "/account/order" && <AccountOrders />}
      </div>
    </div>
  );
};

export default Account;
