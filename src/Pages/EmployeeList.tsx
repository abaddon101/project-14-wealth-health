import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logoWealthHealth from "../Assets/logoWealthHealth.jpg";
import { RootState } from "../Features/Store";
import { Employee } from "../Features/employeeSlice";
// Render a table using the TablePlugin from the NPM library mr01-table-plugin
import { TablePlugin } from "mr01-table-plugin";

function EmployeeList() {
  // Retrieve the list of employees from the Redux store
  const employees = useSelector((state: RootState) => state.employees.list);

  // Extract the headers from the first employee in the list (assuming all employees have the same keys)
  const headers: string[] =
    employees.length > 0 ? Object.keys(employees[0]) : [];

  // Extract the data for each employee in the list
  const data: string[][] = employees.map((employee: Employee) =>
    // Convert each property value to a string and create an array of values
    Object.values(employee).map((value) => String(value))
  );

  return (
    <div className="App">
      {/* Navigation links */}
      <nav className="header-container">
        <Link to="/">
          <img src={logoWealthHealth} className="App-logo" alt="logo" />
        </Link>
        <Link to="/CreateEmployee">Create Employee</Link>
      </nav>

      {/* Render a table using the TablePlugin from the NPM library mr01-table-plugin */}
      <TablePlugin headers={headers} data={data} />
    </div>
  );
}

export default EmployeeList;
