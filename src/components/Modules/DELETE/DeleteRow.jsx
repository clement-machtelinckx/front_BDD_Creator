import React from "react";
import { deleteRow } from "../../../utils/utils";
import { useNavigate, useParams } from "react-router-dom";

const DeleteRow = ({ databaseName, tableName, columnName, value }) => {

    const handleDelete = async () => {

    try {
      const data = await deleteRow(databaseName, tableName, columnName, value);
      console.log(data);
      // You can add additional logic here to update the table data or display a success message
    } catch (error) {
      console.error("Error deleting row:", error);
      // You can add additional logic here to display an error message
    }
  };

  return <button onClick={handleDelete}>Delete Row</button>;
};

export default DeleteRow;
