import React from "react";
import { Link } from "react-router-dom";
import logoWealthHealth from "../Assets/logoWealthHealth.jpg";

function EmployeeList() {
  return (
    <div>
      <nav className="nav-app">
        <Link to="/">
          <img src={logoWealthHealth} className="App-logo" alt="logo" />
        </Link>
        <Link to="/CreateEmployee">CREATE EMPLOYEE</Link>
      </nav>
    </div>
  );
}

export default EmployeeList;
