
import "./home.css";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
const navigate = useNavigate();

  return (
    <div className="home">
      <h1 className="welcome-message">Bienvenue !</h1>
      <p className="sub-text">
        <Link to={`/database`}> Database </Link>
      </p>

    </div>
  );
};


export default Home;