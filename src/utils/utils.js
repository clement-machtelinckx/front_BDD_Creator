

export const getInputType = (type) => {
  if (type.startsWith("int")) {
    return { type: "number" };
  } else if (type.startsWith("varchar")) {
    return { type: "text" };
  } else if (type.startsWith("date")) {
    return { type: "date" };
  } else if (type.startsWith("text")) {
    return { type: "textarea" };
  } else if (type.startsWith("decimal")) {
    return { type: "number", step: "0.01" };
  } else {
    return { type: "text" };
  }
};


export const getDatabaseCollection = async () => {
    try {
      const response = await fetch(`http://localhost/BDD_Creator/src/routes/GET/database/getCollectionDatabases.php`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching database collection:', error);
    }
  };

export const getTableCollection = async (databaseName) => {
    try {
      const response = await fetch(`http://localhost/BDD_Creator/src/routes/GET/table/getCollectionTable.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ databaseName }),

      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching table collection:', error);
    }
  }

export const getTable = async (databaseName, tableName) => {
    try {
      const response = await fetch(`http://localhost/BDD_Creator/src/routes/GET/table/getTable.php`, {
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
      return data;
    } catch (error) {
      console.error('Error fetching table:', error);
    }
  }

export const getTableColumnValue = async (databaseName, tableName) => {
    try {
      const response = await fetch(`http://localhost/BDD_Creator/src/routes/GET/table/getTableColumnValue.php`, {
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
      return data;
    } catch (error) {
      console.error('Error fetching table columns:', error);
    }
  }

export const insertRow = async (databaseName, tableName, values) => {
    try{
        const responce = await fetch(`http://localhost/BDD_Creator/src/routes/POST/table/insertRow.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ databaseName, tableName, values }),
        });
        if(!responce.ok){
            throw new Error(`HTTP error! status: ${responce.status}`);
        }

        const data = await responce.json();
        return data;
    } catch (error) {
        console.error('Error inserting row:', error);
    }
}
export const createTable = async (databaseName, tableName, columns) => {
    try{
        const responce = await fetch(`http://localhost/BDD_Creator/src/routes/POST/table/createTable.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ databaseName, tableName, columns }),
        });
        if(!responce.ok){
            throw new Error(`HTTP error! status: ${responce.status}`);
        }

        const data = await responce.json();
        return data;
    } catch (error) {
        console.error('Error creating table:', error);
    }
}





