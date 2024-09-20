import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
        <header className="header">
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/database">Database</Link>
            </li>
            <li>
            <Link to="/restore">Restore Database</Link>
            </li>
            </ul>
        </nav>
        </header>
    </div>
  );
};

export default Header;
