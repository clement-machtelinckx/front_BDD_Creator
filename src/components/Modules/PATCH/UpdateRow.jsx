// UpdateRow.js

import React, { useState } from "react";
import { updateRow, getInputType } from "../../../utils/utils";

const UpdateRow = ({ databaseName, tableName, rowData, colData }) => {
  const [newValues, setNewValues] = useState(rowData);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const value = newValues.id; // assuming "id" is the column name used for the search key
      const data = await updateRow(databaseName, tableName, "id", value, newValues);
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
      <button className="btn-hide" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "V"}
      </button>
      {isVisible && (
        <form onSubmit={handleSubmit}>
          {colData.map((column) => {
            const { type, step } = getInputType(column.Type);
            return (
              <div key={column.Field}>
                <label htmlFor={column.Field}>{column.Field}</label>
                <input type={type} name={column.Field} id={column.Field} step={step} value={newValues[column.Field]} onChange={handleChange} />
              </div>
            );
          })}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default UpdateRow;
