import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateEmployee from "./Pages/CreateEmployee";
import EmployeeList from "./Pages/EmployeeList";
import Home from "./Pages/Home";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateEmployee" element={<CreateEmployee />} />
          <Route path="/EmployeeList" element={<EmployeeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
