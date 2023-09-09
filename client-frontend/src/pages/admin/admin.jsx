import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminPanel.css";

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
      <br /><br /><br /><br />
      <h1>Admin Panel</h1>
      <div className='form-container'>
        <form>
          <input
            type="text"
            placeholder="Image URL"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
          <br />
          {mode === 'update' ? (
            <div>
              <button type="button" onClick={handleUpdateProduct}>Update</button>
              <button type="button" onClick={handleCancelEdit}>Cancel</button>
            </div>
          ) : (
            <button type="button" onClick={handleAddProduct}>Add</button>
          )}
        </form>
      </div>
      <div>
        <h2>List</h2>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Products.map((product) => (
              <tr key={product._id}>
                <td>{product.image}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
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
