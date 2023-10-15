import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminPanel() {
  const [Products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    price: 0,
  });
  const [mode, setMode] = useState('add');
  const [selectedProductId, setSelectedProductId] = useState('');

  const apiUrl = 'http://localhost:8070/products';

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddProduct = () => {
    axios.post(`${apiUrl}/add`, formData)
      .then(() => {
        refreshProductList();
        clearFormData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdateProduct = () => {
    axios.put(`${apiUrl}/update/${selectedProductId}`, formData)
      .then(() => {
        refreshProductList();
        clearFormData();
        setMode('add');
        setSelectedProductId('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEditProduct = (Product) => {
    setFormData({
      image: Product.image,
      title: Product.title,
      price: Product.price,
    });
    setMode('update');
    setSelectedProductId(Product._id);
  };

  const handleCancelEdit = () => {
    clearFormData();
    setMode('add');
    setSelectedProductId('');
  };

  const handleDeleteProduct = (id) => {
    axios.delete(`${apiUrl}/delete/${id}`)
      .then(() => {
        refreshProductList();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const refreshProductList = () => {
    axios.get(apiUrl)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const clearFormData = () => {
    setFormData({
      image: "",
      title: "",
      price: 0,
    });
  };

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md p-4 border rounded-lg shadow-lg">
        <h3 className="mb-4 text-3xl font-extrabold text-gray-900">
          Add Products
        </h3>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Image URL"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              placeholder="Price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>
          <br />
          {mode === 'update' ? (
            <div>
              <button
                type="button"
                onClick={handleUpdateProduct}
                className="bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-4 py-2"
              >
                Update
              </button>
              <button
                type="button"
                onClick={handleCancelEdit}
                className="bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 text-gray-900 font-medium rounded-lg text-sm px-4 py-2 ml-2"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleAddProduct}
              className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-4 py-2"
            >
              Add
            </button>
          )}
        </form>
      </div>
    </div>

    <h3 className="mt-8 mb-4 text-3xl font-extrabold text-gray-900">
          Products
        </h3>
        <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-200 rounded-lg">
          <thead className="text-xs text-white bg-black dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Title</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Products.map((product) => (
              <tr key={product._id} className="bg-white dark:bg-gray-800">
                <td className="border px-4 py-2">{product.image}</td>
                <td className="border px-4 py-2">{product.title}</td>
                <td className="border px-4 py-2">{product.price}</td>
                <td className="border px-6 py-4">
                  <button
                    onClick={() => handleEditProduct(product)}
                    className="bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-4 py-2 mb-2 block w-full h-10"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-4 py-2 block w-full h-10"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminPanel;
