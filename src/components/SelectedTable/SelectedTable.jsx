import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { getTable, getTableColumnValue, getInputType, insertRow } from "../../utils/utils";
import "./selectedTable.css";
import AddColumn from "../Modules/AddColumn";

const SelectedTable = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [colData, setColData] = useState([]);
  const { databaseName, tableName } = useParams();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    getTableColumnValue(databaseName, tableName)
      .then((colData) => {
        setColData(colData);
        console.log(colData);
      })

    getTable(databaseName, tableName)
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching database collection:", error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await insertRow(databaseName, tableName, [formData]);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error inserting row:", error);
    }
  };

  return (
    <div>
      <h1>{tableName}</h1>
      <AddColumn/>
      <table>
        <thead>
          <tr>
            {colData.map((col, index) => (
              <th key={index}>{col.Field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {colData.map((col, index) => (
                <td key={index}>{row[col.Field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {colData.length > 0 && (
          <form onSubmit={handleSubmit}>
            {colData.map((column) => {
              const { type, step } = getInputType(column.Type);
              return (
                <div key={column.Field}>
                  <label htmlFor={column.Field}>{column.Field}</label>
                  <input type={type} name={column.Field} id={column.Field} step={step} onChange={handleInputChange} />
                </div>
              );
            })}
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default SelectedTable;
