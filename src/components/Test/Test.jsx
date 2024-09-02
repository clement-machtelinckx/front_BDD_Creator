
import React from "react";
import { useNavigate } from "react-router-dom";

const Test = () => {
    const navigate = useNavigate();

        const getDatabaseCollection = async () => {
            try {
              const response = await fetch(`http://localhost/BDD_Creator/src/routes/GET/database/getCollectionDatabases.php?`);
          
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
          
              const data = await response.json();
              return data;
            } catch (error) {
              console.error('Error fetching database collection:', error);
              throw error;
            }
          };
          getDatabaseCollection('myCollection')
            .then(data => console.log(data))
            .catch(error => console.error(error));

    return (
        <div>
            <h1>Test</h1>
        </div>
    );
}

export default Test;