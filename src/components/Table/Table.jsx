import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { getTableCollection } from "../../utils/utils";
import CreateTables from "../Modules/CreateTables";

const Table = () => {
  const { databaseName } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log()
    getTableCollection(databaseName)
      .then((data) => {
        setData(data);
        console.log(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching table collection:", error);
      });
  }, [databaseName]);

  return (
    <div>
      <div>
        <h1>Tables in {databaseName}</h1>
        {data.length > 0 ? (
          <ul>
            {data.map((tableName, index) => (
              <li key={index}>
                <Link to={`/${databaseName}/${tableName}`}>{tableName}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
        <CreateTables/>
      </div>
    </div>
  );
};

export default Table;
