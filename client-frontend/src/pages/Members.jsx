import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Members() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteSelected = (object) => {
    axios
      .get(`http://localhost:8070/users/delete/${object._id}`)
      .then(() => {
        // After successful deletion, fetch the updated user list
        axios
          .get("http://localhost:8070/users")
          .then((response) => {
            setUsers(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });

  };
  
  const [selectedObject, setSelectedObject] = useState(null);

  // Define the updateSelected function
  const updateSelected = (object) => {
    setSelectedObject(object);
  };

  const tabRow = () => {
    return users.map((object, i) => (
      <tr
        key={object._id}
        className="bg-white text-sm text-gray-800 hover:bg-gray-100 transition duration-300"
      >
        {/* <td className="px-6 py-4 whitespace-nowrap">{object._id}</td> */}
        <td className="ml -10 px-6 py-4 whitespace-nowrap">
          {object.first_name} {object.last_name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{object.email}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none"
            onClick={() => updateSelected(object)}
          >
            Update
          </button>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none"
            onClick={() => deleteSelected(object)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="overflow-x-auto">
      <table className="ml-20 mr-20 min-w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">{tabRow()}</tbody>
      </table>
    </div>
  );
}

export default Members;
