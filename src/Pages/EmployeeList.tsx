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
import SortIcon from "../Components/Table/SortIcon";
import SearchBar from "../Components/Table/SearchBar";

// EmployeeList component displays a table of employees.
function EmployeeList() {
  // Retrieve the list of employees from the Redux store.
  const employees = useSelector((state: RootState) => state.employees.list);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculer les informations pour l'affichage
  const startRange = (currentPage - 1) * entriesPerPage + 1;
  const endRange = Math.min(currentPage * entriesPerPage, employees.length);
  const totalEmployees = employees.length;
  const totalPages = Math.ceil(totalEmployees / entriesPerPage);

  // Log the list of employees for debugging or monitoring purposes.
  // console.log("Employee List:", employees);

  // sort states
  const [sortKey, setSortKey] = useState<string>(""); // Clé de tri
  const [sortDirection, setSortDirection] = useState<
    "asc" | "desc" | undefined
  >(undefined); // Direction de tri

  //filter searchBar
  const [searchTerm, setSearchTerm] = useState<string>("");
  // console.log(searchTerm);
  

  // Fonction pour gérer le clic sur l'en-tête de colonne pour déclencher le tri
  const handleSort = (key: string) => {
    if (sortKey === key) {
      // Inverser la direction de tri si la même clé est cliquée à nouveau
      setSortDirection((prevDirection) =>
        prevDirection === "asc" ? "desc" : "asc"
      );
    } else {
      // Changer la clé de tri et définir la direction par défaut
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  // Fonction pour trier les employés en fonction de la clé et de la direction de tri
  const sortedEmployees = [...employees].sort((a, b) => {
    if (sortDirection === "asc") {
      return a[sortKey].toString().localeCompare(b[sortKey].toString());
    } else if (sortDirection === "desc") {
      return b[sortKey].toString().localeCompare(a[sortKey].toString());
    } else {
      return 0;
    }
  });

  // Fonction pour gérer le changement de terme de recherche
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  // Filtrer les employés en fonction du terme de recherche
  const filteredEmployees = sortedEmployees.filter((employee) =>
    Object.values(employee)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleEntriesPerPageChange = (value: number) => {
    setEntriesPerPage(value);
    setCurrentPage(1); // Reset to the first page when changing entries per page
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleGoToPage = (pageNumber: number) => {
    setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)));
  };

  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentEmployees = filteredEmployees.slice(startIndex, endIndex);


  // Générer les boutons pour la sélection de page
  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => handleGoToPage(i)}
        disabled={i === currentPage}
      >
        {i}
      </button>
    );
  }

  const isTableEmpty = employees.length === 0 && searchTerm === "";
  const isFilterResultEmpty =
    filteredEmployees.length === 0 && searchTerm !== "";

  // ...

  return (
    <div>
      {/* Navigation links */}
      <nav className="nav-app">
        <Link to="/">
          <img src={logoWealthHealth} className="App-logo" alt="logo" />
        </Link>
        <Link to="/CreateEmployee">CREATE EMPLOYEE</Link>
      </nav>
      <SearchBar
        onSearch={handleSearch}
        isFilterActive={filteredEmployees.length < 0}
      />
      <EntriesPerPageDropdown onChange={handleEntriesPerPageChange} />

      {/* Table displaying employee information */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => handleSort("firstName")}>
              First Name{" "}
              <SortIcon
                direction={sortKey === "firstName" ? sortDirection : undefined}
              />
            </th>
            <th onClick={() => handleSort("lastName")}>
              Last Name{" "}
              <SortIcon
                direction={sortKey === "lastName" ? sortDirection : undefined}
              />
            </th>
            <th onClick={() => handleSort("startDate")}>
              Start Date{" "}
              <SortIcon
                direction={sortKey === "startDate" ? sortDirection : undefined}
              />
            </th>
            <th onClick={() => handleSort("departments")}>
              Department{" "}
              <SortIcon
                direction={
                  sortKey === "departments" ? sortDirection : undefined
                }
              />
            </th>
            <th onClick={() => handleSort("dateOfBirth")}>
              Date of Birth{" "}
              <SortIcon
                direction={
                  sortKey === "dateOfBirth" ? sortDirection : undefined
                }
              />
            </th>
            <th onClick={() => handleSort("street")}>
              Street{" "}
              <SortIcon
                direction={sortKey === "street" ? sortDirection : undefined}
              />
            </th>
            <th onClick={() => handleSort("city")}>
              City{" "}
              <SortIcon
                direction={sortKey === "city" ? sortDirection : undefined}
              />
            </th>
            <th onClick={() => handleSort("stateCountry")}>
              State{" "}
              <SortIcon
                direction={
                  sortKey === "stateCountry" ? sortDirection : undefined
                }
              />
            </th>
            <th onClick={() => handleSort("zipCode")}>
              Zip Code{" "}
              <SortIcon
                direction={sortKey === "zipCode" ? sortDirection : undefined}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {isTableEmpty && !isFilterResultEmpty ? (
            <tr>
              <td colSpan={9}>No data available in table</td>
            </tr>
          ) : (
            currentEmployees.map((employee: Employee) => (
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
            ))
          )}
          {isFilterResultEmpty && !isTableEmpty && (
            <tr>
              <td colSpan={9}>No matching records found</td>
            </tr>
          )}
        </tbody>
      </Table>

      <TableInfo
        startRange={startRange}
        endRange={endRange}
        totalEmployees={totalEmployees}
        filteredEmployees={filteredEmployees.length}
        searchTerm={searchTerm} 
      />

      {/* Pagination controls */}
      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        {pageButtons}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default EmployeeList;
