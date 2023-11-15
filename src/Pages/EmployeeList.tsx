// EmployeeList.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logoWealthHealth from "../Assets/logoWealthHealth.jpg";
import Table from "react-bootstrap/Table";
import { RootState } from "../Features/Store";
import { Employee } from "../Features/employeeSlice";
import TableInfo from "../Components/Table/TableInfo";
import EntriesPerPageDropdown from "../Components/Table/EntriesPerPageDropdown";

// EmployeeList component displays a table of employees.
function EmployeeList() {
  // Retrieve the list of employees from the Redux store.
  const employees = useSelector((state: RootState) => state.employees.list);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // Calculer les informations pour l'affichage
  const startRange = employees.length > 0 ? 1 : 0;
  const endRange = employees.length;
  const totalEmployees = employees.length;

  // Log the list of employees for debugging or monitoring purposes.
  console.log("Employee List:", employees);
  const handleEntriesPerPageChange = (value: number) => {
    setEntriesPerPage(value);
    setCurrentPage(1); // Reset to the first page when changing entries per page
  };

  return (
    <div>
      {/* Navigation links */}
      <nav className="nav-app">
        <Link to="/">
          <img src={logoWealthHealth} className="App-logo" alt="logo" />
        </Link>
        <Link to="/CreateEmployee">CREATE EMPLOYEE</Link>
      </nav>
      <EntriesPerPageDropdown onChange={handleEntriesPerPageChange} />
      {/* Table displaying employee information */}
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
          {/* Map through the employees and display their information in rows */}
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
      <TableInfo
        startRange={startRange}
        endRange={endRange}
        totalEmployees={totalEmployees}
      />
    </div>
  );
}

export default EmployeeList;
