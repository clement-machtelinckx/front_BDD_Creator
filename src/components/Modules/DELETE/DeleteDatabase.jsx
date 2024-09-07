import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteDatabase } from "../../../utils/utils";

export const DeleteDatabase = () => {
  const navigate = useNavigate();
  const { databaseName } = useParams();

  const handleDelete = () => {
    deleteDatabase(databaseName)
      .then((data) => {
        console.log(data);
        navigate(`/database`);
      })
      .catch((error) => {
        console.error("Error deleting table:", error);
      });
  };

  return (
    <div>
        <h1>Are you sure ? </h1>
      <button onClick={handleDelete}>Delete Database</button>
    </div>
  );
};
export default DeleteDatabase;