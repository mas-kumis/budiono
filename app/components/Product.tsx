"use client";
import React, { useEffect, useState } from "react";
import ModalEdit from "./ModalEdit";
type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
};

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleclick = (product: Product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleDelete = (product: Product) => {
    fetch(`http://localhost:3000/api/products/${product.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter((p) => p.id !== product.id)
        );
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="w-1/4 py-2">Title</th>
              <th className="w-1/4 py-2">Price</th>
              <th className="w-1/4 py-2">Category</th>
              <th className="w-1/4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr className=" bg-white px-4 py-2 rounded-lg shadow-md animate-pulse">
                <td className="px-2 py-2 h-12 bg-gray-300 rounded "></td>
                <td className="px-2 py-2 h-12 bg-gray-300 rounded "></td>
                <td className=" px-2 py-2 h-12 bg-gray-300 rounded "></td>
                <td className="px-2 py-2 h-12 bg-gray-300 rounded "></td>
              </tr>
            )}
            {products.map((product: Product) => (
              <tr className="bg-gray-100" key={product.id}>
                <td className="py-2 px-4">{product.title}</td>
                <td className="py-2 px-4">${product.price}</td>
                <td className="py-2 px-4">{product.category}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleclick(product)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(product)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {openModal && selectedProduct && (
          <ModalEdit
            product={selectedProduct}
            onClose={() => setOpenModal(false)}
            onSave={(updatedProduct) => {
              products.map((p) =>
                p.id === updatedProduct.id
                  ? (p.title = updatedProduct.title)
                  : null
              );
              setProducts([...products]);
              setOpenModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Product;
