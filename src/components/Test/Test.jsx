import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDatabaseCollection = async () => {
      try {
        const response = await fetch(`http://localhost/BDD_Creator/src/routes/GET/database/getCollectionDatabases.php`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching database collection:', error);
      }
    };


    getDatabaseCollection();
  }, []);

  return (
    <div>
      <div>
      <h1>Test</h1>
        {data.length > 0 ? (
          <ul>
            {data.map((databaseName, index) => (
              <li key={index}>{databaseName}</li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>

      </div>
    </div>
  );
}

export default Test;
