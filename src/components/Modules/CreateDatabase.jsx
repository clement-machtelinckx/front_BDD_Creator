import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createDatabase } from "../../utils/utils";

export const CreateDatabase = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [databaseName, setDatabaseName] = useState("");

  const handleCreateDatabaseInputChange = (event) => {
    setDatabaseName(event.target.value);
  };

  const handleCreateDatabaseSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createDatabase(databaseName);

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
      <h2>Create Database</h2>
      <form onSubmit={handleCreateDatabaseSubmit}>
        <div>
          <label htmlFor="databaseName">Database Name</label>
          <input type="text" name="databaseName" id="databaseName" onChange={handleCreateDatabaseInputChange} />
        </div>
        <button type="submit">Create Database</button>
      </form>
    </div>
  );
};

export default CreateDatabase;
