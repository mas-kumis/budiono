import React from "react";
const page = () => {
  return (
    <div className="">
      <h4>Dashboard</h4>
      <table className="my-[40px] border-collapse table-auto w-full">
        <thead>
          <tr className="bg-neutral-800 text-white  ">
            <th className=" py-2 px-8 text-left">ID</th>
            <th className="py-2 px-8 text-left">Title</th>
            <th className="py-2 px-8 text-left">Price</th>
            <th className="py-2 px-8 text-left">Category</th>
            <th className="py-2 px-8 text-left">Is Available</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Product 1</td>
            <td>10000</td>
            <td>Electronics</td>
            <td>true</td>
          </tr>
        </tbody>
      </table>{" "}
    </div>
  );
};

export default page;
