import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./AdminPanel.css";

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
    <div className="App">
      <h1>Admin Panel</h1>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <form>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Image URL"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
          </div>
          <div className="mb-6">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          </div>
          <div className="mb-6">
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
          </div>
          <br />
          {mode === 'update' ? (
            <div>
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleUpdateProduct}>Update</button>
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleCancelEdit}>Cancel</button>
            </div>
          ) : (
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleAddProduct}>Add</button>
          )}
        </form>
      </div>
        <h1>List</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Title</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Products.map((product) => (
              <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">{product.image}</td>
                <td class="px-6 py-4">{product.title}</td>
                <td class="px-6 py-4">{product.price}</td>
                <td class="px-6 py-4">
                  <button onClick={() => handleEditProduct(product)}>Update</button>
                  <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AdminPanel;
