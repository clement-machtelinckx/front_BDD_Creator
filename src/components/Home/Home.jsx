
import "./home.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
const navigate = useNavigate();

  return (
    <div className="home">
      <h1 className="welcome-message">Bienvenue !</h1>
      <p className="sub-text">
        Découvrez, créez et participez à des événements passionnants dans votre communauté.
      </p>

    </div>
  );
};


export default Home;