"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Create = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          price: parseFloat(price),
          category,
        }),
      });
      const result = await response.json();

      if (response.ok) {
        toast.success("Product created successfully", {
          position: "top-center",
        });
        setTitle("");
        setPrice("");
        setCategory("");
      } else {
        toast.error(result.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Product created successfully", {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        <label>
          Title
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            className="bg-gray-200 px-2 py-1"
          />
        </label>
        <label>
          Price
          <input
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            name="price"
            autoComplete="off"
            className="bg-gray-200 px-2 py-1"
          />
        </label>
        <label>
          Category
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            name="category"
            className="bg-gray-200 px-2 py-1"
          >
            <option value="">Select</option>
            <option value="Fiction">Fiction</option>
            <option value="Education">Education</option>
            <option value="History">History</option>
          </select>
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Create;
