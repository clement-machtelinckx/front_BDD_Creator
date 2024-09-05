import React, { useEffect, useState } from "react"; 

const TableForm = () => {
  const [databaseName, setDatabaseName] = useState("");
  const [tableName, setTableName] = useState("");
  const [columns, setColumns] = useState([]);
  const [formData, setFormData] = useState({});

  const fetchColumns = async () => {
    try {
      const response = await fetch("http://localhost/BDD_Creator/src/routes/GET/table/getTableColumnValue.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ databaseName, tableName }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setColumns(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching table columns:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost/BDD_Creator/src/routes/POST/table/insertRow.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ databaseName, tableName, values: [formData] }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error inserting row:", error);
    }
  };

  const getInputType = (type) => {
    if (type.startsWith("int")) {
      return "number";
    } else if (type.startsWith("varchar")) {
      return "text";
    } else if (type.startsWith("date")) {
      return "date";
    } else {
      return "text";
    }
  };

  return (
    <div>
      <div>

      </div>
      <form>
        <div>
          <label htmlFor="databaseName">Database Name</label>
          <input type="text" name="databaseName" id="databaseName" value={databaseName} onChange={(e) => setDatabaseName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="tableName">Table Name</label>
          <input type="text" name="tableName" id="tableName" value={tableName} onChange={(e) => setTableName(e.target.value)} />
        </div>
        <button type="button" onClick={fetchColumns}>Get Columns</button>
      </form>
      {columns.length > 0 && (
        <form onSubmit={handleSubmit}>
          {columns.map((column) => (
            <div key={column.Field}>
              <label htmlFor={column.Field}>{column.Field}</label>
              <input type={getInputType(column.Type)} name={column.Field} id={column.Field} onChange={handleInputChange} />
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default TableForm;