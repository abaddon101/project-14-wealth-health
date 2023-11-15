// EmployeeList.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logoWealthHealth from "../Assets/logoWealthHealth.jpg";
import Table from "react-bootstrap/Table";
import { RootState } from "../Features/Store";
import { Employee } from "../Features/employeeSlice";

function EmployeeList() {
  // const formState = useSelector((state: RootState) => state.form);
  const employees = useSelector((state: RootState) => state.employees.list);

  console.log("Employee List:", employees);
  return (
    <div>
      <nav className="nav-app">
        <Link to="/">
          <img src={logoWealthHealth} className="App-logo" alt="logo" />
        </Link>
        <Link to="/CreateEmployee">CREATE EMPLOYEE</Link>
      </nav>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Department</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee: Employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.startDate}</td>
              <td>{employee.departments}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.stateCountry}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default EmployeeList;
