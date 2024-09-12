
import "./home.css";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
const navigate = useNavigate();

  return (
    <div className="container">
      <div className="home">
        <h1 className="welcome-message">Bienvenue !</h1>
        <p className="sub-text">
          <Link to={`/database`}> Database </Link>

        </p>
        <p className="sub-text">
        <Link to={`/restore`}>Restore Database</Link>
        </p>

      </div>
    </div>
  );
};


export default Home;