import React from "react";

const RecentOrders = () => {
  const recentOrders = [
    {
      id: 1,
      name: "Lucas Schmidt",
      image: "/images/person/person1.jpg",
      orderId: "90347125",
      amount: "$204.00",
      status: "Delivered",
    },
    {
      id: 2,
      name: "Emily Johnson",
      image: "/images/person/person2.jpg",
      orderId: "90347126",
      amount: "$99.00",
      status: "Cancelled",
    },
    {
      id: 3,
      name: "Michael Brown",
      image: "/images/person/person3.jpg",
      orderId: "90347127",
      amount: "$150.00",
      status: "Delivered",
    },
    {
      id: 4,
      name: "Jessica Taylor",
      image: "/images/person/person4.jpg",
      orderId: "90347128",
      amount: "$300.00",
      status: "Delivered",
    },
    {
      id: 5,
      name: "Daniel Wilson",
      image: "/images/person/person5.jpg",
      orderId: "90347129",
      amount: "$85.00",
      status: "Cancelled",
    },
    {
      id: 6,
      name: "Sarah Miller",
      image: "/images/person/person6.jpg",
      orderId: "90347130",
      amount: "$175.00",
      status: "Delivered",
    },
    {
      id: 7,
      name: "David Anderson",
      image: "/images/person/person7.jpg",
      orderId: "90347131",
      amount: "$220.00",
      status: "Cancelled",
    },
    {
      id: 8,
      name: "Sophia Martinez",
      image: "/images/person/person4.jpg",
      orderId: "90347132",
      amount: "$110.00",
      status: "Delivered",
    },
    {
      id: 9,
      name: "James Lee",
      image: "/images/person/person2.jpg",
      orderId: "90347133",
      amount: "$145.00",
      status: "Delivered",
    },
  ];

  return (
    <>
      <div className="w-full lg:flex-1 lg:max-w-[1100px] px-2 mb-6 lg:mb-0">
        <div className="relative overflow-x-auto bg-[#202028] p-5 rounded-md">
          <span className="text-white text-xl sm:text-[22px] font-bold">Recent Orders</span>

          <div className="w-full text-left rtl:text-right mt-2 h-[440px] overflow-y-auto custom-scrollbar">
            <table className="w-full">
              <thead className="text-sm text-gray-200 border-b border-zinc-700 sticky top-0 bg-[#202028]">
                <tr>
                  <th scope="col" className="px-0 py-3">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Order No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-t border-zinc-700/50 cursor-pointer hover:bg-zinc-600/30 duration-200 ">
                    <td className="py-3 pr-6 whitespace-nowrap px-2 ">
                      <div className="flex flex-row justify-start items-center space-x-2 ">
                        <img
                          className="w-10 min-w-10 min-h-10 h-10 rounded-full "
                          src={order.image}
                          alt={`${order.name} image`}
                        />
                        <span className="text-zinc-200 text-sm font-semibold">
                          {order.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-3">
                      <span className="text-zinc-200 text-sm font-semibold">
                        {order.orderId}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <span className="text-zinc-200 text-sm font-semibold">
                        {order.amount}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      {order.status === "Delivered" ? (
                        <span className="px-3 text-sm rounded-full text-green-500 font-semibold bg-green-600/50">
                          {order.status}
                        </span>
                      ) : (
                        <span className="px-3 text-sm rounded-full text-red-400 font-semibold bg-red-600/40 ">
                          {order.status}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentOrders;
