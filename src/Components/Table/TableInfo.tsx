// TableInfo.tsx

// Import necessary modules from React
import React from "react";

// Define the properties expected by the TableInfo component
interface TableInfoProps {
  startRange: number; // Start index of the displayed entries
  endRange: number; // End index of the displayed entries
  totalEmployees: number; // Total number of employees in the dataset
  filteredEmployees: number; // Number of employees after applying filters
  searchTerm: string; // The current search term
}

// Define the TableInfo component as a functional component
const TableInfo: React.FC<TableInfoProps> = ({
  startRange,
  endRange,
  totalEmployees,
  filteredEmployees,
  searchTerm,
}) => {
  // Determine additional information based on whether a search term is present
  const entriesInfo =
    searchTerm.trim().length > 0
      ? ` (filtered from ${totalEmployees} total entries)`
      : "";

  // Render the TableInfo component with information about the displayed entries
  return (
    <div>
      {/* Display the range of entries and the total number of entries */}
      Showing {filteredEmployees === 0 ? 0 : startRange} to {filteredEmployees}{" "}
      of {filteredEmployees} entries
      {/* Display additional information if a search term is present */}
      {entriesInfo}
    </div>
  );
};

// Export the TableInfo component as the default export
export default TableInfo;
