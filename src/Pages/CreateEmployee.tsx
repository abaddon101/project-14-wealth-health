import React from "react";
import { Link } from "react-router-dom";

import logoWealthHealth from "../Assets/logoWealthHealth.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function CreateEmployee() {
  return (
    <div>
      <nav className="nav-app">
        <Link to="/">
          <img src={logoWealthHealth} className="App-logo" alt="logo" />
        </Link>
        <Link to="/EmployeeList">EMPLOYEE LIST</Link>
      </nav>
      <section className="section-create-employee">
        <div className="container"></div>
      </section>
    </div>
  );
}

export default CreateEmployee;
