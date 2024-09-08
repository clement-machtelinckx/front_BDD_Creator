import React, { useState } from "react";
import { updateRow } from "../../../utils/utils";

const UpdateRow = ({ databaseName, tableName, columnName, rowData }) => {
  const [newValues, setNewValues] = useState(rowData);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await updateRow(databaseName, tableName, columnName, newValues);
      console.log(data);
      // You can add additional logic here to update the row data in the UI or display a success message
    } catch (error) {
      console.error("Error updating row:", error);
      // You can add additional logic here to display an error message
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewValues({ ...newValues, [name]: value });
  };

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Update Row"}
      </button>
      {isVisible && (
        <form onSubmit={handleSubmit}>
          {Object.entries(newValues).map(([key, value]) => (
            <label key={key}>
              {key}:
              <input
                type="text"
                name={key}
                value={value}
                onChange={handleChange}
              />
            </label>
          ))}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default UpdateRow;
