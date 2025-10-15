import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function AdminProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "/api/products")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <div className="w-full min-h-screen bg-primary p-6 flex flex-col items-center">

        <Link to="/admin/add-product" className="fixed right-[50px] bottom-[50px] text-5xl">
            <FaPlus className="hover:text-accent"/>
        </Link>

      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-semibold text-secondary mb-6 text-center">
          Product Management
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="p-3 font-medium">Image</th>
                <th className="p-3 font-medium">Product ID</th>
                <th className="p-3 font-medium">Product Name</th>
                <th className="p-3 font-medium">Product Price (LKR)</th>
                <th className="p-3 font-medium">Labelled Price (LKR)</th>
                <th className="p-3 font-medium">Category</th>
                <th className="p-3 font-medium">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((item) => (
                <tr
                  key={item.productID}
                  className="border-b hover:bg-primary transition-all duration-200"
                >
                  <td className="p-3">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg border border-gray-300"
                    />
                  </td>
                  <td className="p-3 text-gray-700">{item.productID}</td>
                  <td className="p-3 font-medium text-gray-800">{item.name}</td>
                  <td className="p-3 text-gray-700">{item.price}</td>
                  <td className="p-3 text-gray-700">{item.labelledPrice}</td>
                  <td className="p-3 text-gray-700">{item.category}</td>
                  <td className="p-3">
                    <div className="flex justify-center gap-4">
                      <button className="p-2 rounded-full hover:bg-red-100 transition">
                        <FaTrashAlt className="text-red-500 hover:text-red-600 text-lg" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-accent/10 transition">
                        <FaEdit className="text-accent hover:scale-110 transition-transform text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {products.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="py-6 text-gray-500 italic text-center"
                  >
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
