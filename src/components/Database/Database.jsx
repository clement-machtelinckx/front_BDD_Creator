import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getDatabaseCollection } from "../../utils/utils";
import { useParams } from "react-router-dom";
import CreateDatabase from "../Modules/CreateDatabase";

const Database = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    getDatabaseCollection()
      .then((data) => {
        setData(data);
        console.log(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching database collection:", error);
      });
  }, []);

  return (
    <div>
      <div>
        <CreateDatabase/>
      <h1>db</h1>
        {data.length > 0 ? (
          <ul>
            {data.map((databaseName, index) => (
              <li key={index}><Link to={`/${databaseName}`}>{databaseName}</Link>
              <button onClick={() => navigate(`/${databaseName}/delete/`)}>Delete</button>
              </li>
              
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

export default Database;
