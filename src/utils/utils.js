

export const getInputType = (type) => {
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
export const CreateTable = async (databaseName, tableName, columns) => {
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





