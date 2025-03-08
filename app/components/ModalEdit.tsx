import React from "react";

const ModalEdit = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-4 w-1/2 mx-auto mt-20">
          <h2 className="text-2xl font-bold">Edit Product</h2>
          <form className="mt-4">
            <label className="block text-lg font-bold" htmlFor="title">
              Title
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-lg"
              type="text"
              id="title"
            />
            <label className="block text-lg font-bold mt-4" htmlFor="price">
              Price
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-lg"
              type="number"
              id="price"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
