
import React, { useState } from "react";
import { updateTableName } from "../../../utils/utils";

const UpdateTableName = ({ databaseName, tableName }) => {
  const [newTableName, setNewTableName] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await updateTableName(databaseName, tableName, newTableName);
      console.log(data);
      // You can add additional logic here to update the table name in the UI or display a success message
    } catch (error) {
      console.error("Error updating table name:", error);
      // You can add additional logic here to display an error message
    }
    window.location.reload();
  };

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Update Table Name"}
      </button>
      {isVisible && (
        <form onSubmit={handleSubmit}>
          <label>
            New Table Name:
            <input
              type="text"
              value={newTableName}
              onChange={(event) => setNewTableName(event.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default UpdateTableName;
