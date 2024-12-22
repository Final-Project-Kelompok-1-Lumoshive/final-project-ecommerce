import React from "react";
import { useSelector } from "react-redux";

const AccountOrders = () => {
  const { orders } = useSelector((state) => state.fetch);
  return (
    <div className="flex flex-col justify-between w-full rounded-xl lg:shadow lg:min-h-[36rem] py-8 lg:px-16 px-2 gap-6">
      <div className="flex flex-col gap-6">
        <h5 className="font-poppins text-lg font-medium text-red">My Orders</h5>
        <div className="flex flex-col gap-4">
          {orders.map((order) => (
            <div className="flex w-full bg-[#F5F5F5] gap-4 p-4">
              <div className="w-32 h-20">
                <img
                  src={order.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-poppins flex flex-col gap-2 w-full">
                <div className="flex justify-between items-center">
                  <p className="font-semibold">Order No {order.id}</p>
                  <p className="text-white bg-black px-2">{order.status}</p>
                </div>
                <p>
                  {order.product} ({order.quantity} items)
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="font-poppins flex justify-center items-center">
        <button className="bg-red font-medium text-white px-6 py-3 rounded">
          Load More
        </button>
      </div>
    </div>
  );
};

export default AccountOrders;
