import React, { useState, useEffect } from "react";
import { getDatabaseSaved, restoreDatabase } from "../../../utils/utils";

export const RestoreDatabase = () => {
  const [savedDatabases, setSavedDatabases] = useState([]);
  const [newDatabaseNames, setNewDatabaseNames] = useState({});

  useEffect(() => {
    getDatabaseSaved().then((data) => {
      const databases = Object.entries(data).map(([id, name]) => ({ id, name }));
      setSavedDatabases(databases);
    });
  }, []);

  const handleRestoreDatabase = async (databaseName) => {
    try {
      const response = await restoreDatabase(
        newDatabaseNames[databaseName],
        databaseName
      );
      console.log(response);
      // You can add additional logic here to display a success message or update the UI
    } catch (error) {
      console.error("Error restoring database:", error);
      // You can add additional logic here to display an error message
    }
  };

  const handleNewDatabaseNameChange = (databaseName, newName) => {
    setNewDatabaseNames({ ...newDatabaseNames, [databaseName]: newName });
  };

  return (
    <div>
      <h2>Restore Database</h2>
      {savedDatabases.map((database) => (
        <div key={database.id}>
          <input
            type="text"
            value={newDatabaseNames[database.name] || ""}
            onChange={(e) =>
              handleNewDatabaseNameChange(database.name, e.target.value)
            }
          />
          <button onClick={() => handleRestoreDatabase(database.name)}>
            Restore
          </button>
          <p>{database.name}</p>
        </div>
      ))}
    </div>
  );
};

export default RestoreDatabase;
