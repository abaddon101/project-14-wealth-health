// Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import logoWealthHealth from "../Assets/logoWealthHealth.jpg";

// Home component represents the landing page of the application.
function Home() {
  return (
    <div>
      {/* Navigation links */}
      <nav className="nav-app">
        <img src={logoWealthHealth} className="App-logo" alt="logo" />
        <Link to="/CreateEmployee">CREATE EMPLOYEE</Link>
        <Link to="/EmployeeList">EMPLOYEE LIST</Link>
      </nav>

      {/* Header with a welcome message */}
      <header>
        <h3 className="welcome-message">
          Welcome to HRnet! This is our company&apos;s internal application to
          create and view employee records.
        </h3>
      </header>
    </div>
  );
}

export default Home;
