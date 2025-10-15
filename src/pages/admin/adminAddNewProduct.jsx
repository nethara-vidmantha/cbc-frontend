import { useState } from "react";

export default function AddProductPage() {
  const [productID, setProductId] = useState("");
  const [name, setName] = useState("");
  const [altNames, setAltNames] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState(0);
  const [labelledPrice, setLabelledPrice] = useState(0);
  const [category, setCategory] = useState("cream");
  const [stock, setStock] = useState(0);

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-primary p-6">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 border border-accent/20">
        <h2 className="text-2xl font-semibold text-secondary text-center mb-6">
          Add New Product
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="text-secondary font-medium mb-1">Product ID</label>
            <input
              value={productID}
              onChange={(e) => setProductId(e.target.value)}
              className="p-2 border rounded-lg border-gray-300 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/40"
              placeholder="Enter Product ID"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-secondary font-medium mb-1">Product Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border rounded-lg border-gray-300 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/40"
              placeholder="Enter Product Name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-secondary font-medium mb-1">Alternative Names</label>
            <input
              value={altNames}
              onChange={(e) => setAltNames(e.target.value)}
              className="p-2 border rounded-lg border-gray-300 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/40"
              placeholder="Enter Alternative Names"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-secondary font-medium mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 border rounded-lg border-gray-300 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/40"
            >
              <option value="cream">Cream</option>
              <option value="lotion">Lotion</option>
              <option value="serum">Serum</option>
            </select>
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-secondary font-medium mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-3 h-24 border rounded-lg border-gray-300 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/40 resize-none"
              placeholder="Write a short product description..."
            />
          </div>

          <div className="flex flex-col">
            <label className="text-secondary font-medium mb-1">Product Price (LKR)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="p-2 border rounded-lg border-gray-300 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/40"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-secondary font-medium mb-1">Labelled Price (LKR)</label>
            <input
              type="number"
              value={labelledPrice}
              onChange={(e) => setLabelledPrice(e.target.value)}
              className="p-2 border rounded-lg border-gray-300 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/40"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-secondary font-medium mb-1">Stock</label>
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="p-2 border rounded-lg border-gray-300 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/40"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-secondary font-medium mb-1">Product Images</label>
            <input
              type="file"
              multiple
              onChange={(e) => setImages(e.target.files)}
              className="p-2 border rounded-lg border-gray-300 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/40 bg-primary/50"
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-accent hover:bg-secondary text-white font-medium px-8 py-2 rounded-full shadow-md transition-all duration-200 hover:scale-105">
            Save Product
          </button>
        </div>
      </div>
    </div>
  );
}
