import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { createTable } from "../../utils/utils";

const CreateTables = () => {
  const { databaseName } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [createTableFormData, setCreateTableFormData] = useState({ tableName: "", columns: "" });

  useEffect(() => {
    createTable(databaseName)
      .then((data) => {
        setData(data);
        console.log(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching database collection:", error);
      });
  }, [databaseName]);

  const handleCreateTableInputChange = (event) => {
    const { name, value } = event.target;
    setCreateTableFormData({ ...createTableFormData, [name]: value });
  };

  const handleCreateTableSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await createTable(databaseName, createTableFormData.tableName, createTableFormData.columns);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error creating table:", error);
    }
  };

  return (
    <div>
      <h2>Create Table</h2>
      <form onSubmit={handleCreateTableSubmit}>
        <div>
          <label htmlFor="tableName">Table Name</label>
          <input type="text" name="tableName" id="tableName" onChange={handleCreateTableInputChange} />
        </div>
        <div>
          <label htmlFor="columns">Columns</label>
          <textarea name="columns" id="columns" onChange={handleCreateTableInputChange} />
        </div>
        <button type="submit">Create Table</button>
      </form>
    </div>
  );
};

export default CreateTables;
