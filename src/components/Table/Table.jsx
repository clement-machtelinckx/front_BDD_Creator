import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { getTableCollection } from "../../utils/utils";
import CreateTables from "../Modules/CreateTables";
import DeleteTable from "../Modules/DELETE/DeleteTable";
import UpdateTableName from "../Modules/PATCH/UpdateTableName";
import DumpBase from "../Modules/save/DumpBase";
import BackButton from "../Modules/BackButton";

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
    <div className="container">
      <BackButton/>
      <div>
        <h1>Tables in {databaseName}</h1>
        {data.length > 0 ? (
          <ul>
            {data.map((tableName, index) => (
              <li key={index} className="list-item">
                <Link to={`/${databaseName}/${tableName}`}>{tableName}</Link>
                <button className="btn-delete" onClick={() => navigate(`/${databaseName}/delete/${tableName}`)}>Delete</button>
                <UpdateTableName
              databaseName={databaseName}
              tableName={tableName}
            />
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
      <div>
        <h1>Save Database</h1>
        <DumpBase/>
      </div>
    </div>
  );
};

export default Table;
