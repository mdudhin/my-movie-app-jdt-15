import React from "react";
import { useToken } from "../../hooks/useToken";
import CustomTable from "../../component/custom-table/custom-table";
import { useNavigate } from "react-router";
import { deleteProduct } from "../../services/product/api";

const data = [
  { id: 1, name: "Dhiya", age: 17 },
  { id: 2, name: "Alex", age: 19 },
  { id: 3, name: "Boni", age: 23 },
  { id: 4, name: "Dota", age: 29 },
];

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const { token } = useToken();

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Age", accessor: "age" },
    { header: "Action", accessor: "action" },
  ];

  const handleAddButton = () => {
    navigate("/detail");
  };

  const handleEditButton = (id: string | number) => {
    navigate(`/detail?id=${id}`);
  };

  const handleDeleteButton = async (id: string | number) => {
    try {
      const response = await deleteProduct(id);

      console.log(response);

      alert("delete success");
    } catch (error) {
      console.error(error);
    }
  };

  const dataTable = data.map((item) => {
    return {
      ...item,
      age: `Umur ${item.age}`,
      action: (
        <div className="flex flex-row gap-3">
          <button
            onClick={() => handleEditButton(item.id)}
            className="bg-blue-200 hover:bg-blue-300 py-5 px-10 rounded-lg cursor-pointer"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteButton(item.id)}
            className="bg-red-200 hover:bg-red-300 py-5 px-10 rounded-lg cursor-pointer"
          >
            Delete
          </button>
        </div>
      ),
    };
  });
  return (
    <div className="flex flex-col p-20">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-semibold">Products Data</h1>
        <button
          onClick={handleAddButton}
          className="bg-blue-200 hover:bg-blue-300 py-5 px-10 rounded-lg cursor-pointer"
        >
          Add Product
        </button>
      </div>
      <CustomTable columns={columns} data={dataTable} className="mt-10" />
    </div>
  );
};

export default Admin;
