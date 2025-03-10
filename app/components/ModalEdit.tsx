import React, { useState } from "react";
import Product from "./Product";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

type EditProductProps = {
  product: Product;
  onClose: () => void;
  onSave: (updatedProduct: Product) => void;
};
const ModalEdit = ({ product, onClose, onSave }: EditProductProps) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price.toString());
  const [category, setCategory] = useState(product.category);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`api/products/${product.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          price: parseFloat(price),
          category,
        }),
      });

      if (response.ok) {
        toast.success("Product updated successfully", {
          position: "top-center",
        });
        onSave({
          ...product,
          title,
          price: parseFloat(price),
          category,
        });
        onClose();
      } else {
        const errorData = await response.json();
        toast.error(errorData.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Error", {
        position: "top-center",
      });
    }
  };
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="block text-lg font-bold mt-4" htmlFor="price">
              Price
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-lg"
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label className="block text-lg font-bold mt-4" htmlFor="price">
              Category
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-lg"
              type="text"
              id="price"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <button
              onClick={onClose}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Close
            </button>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
