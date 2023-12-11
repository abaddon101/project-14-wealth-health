// SearchBar.tsx

// Import necessary modules from React
import React, { useState, useEffect } from "react";

// Define the properties expected by the SearchBar component
interface SearchBarProps {
  onSearch: (term: string) => void; // A function to handle search term changes
  isFilterActive: boolean; // New property to indicate whether the filter is active
}

// Define the SearchBar component as a functional component
const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isFilterActive }) => {
  // Use state to manage the current search term in the input field
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Event handler for changes in the search input field
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Update the state with the new search term
    setSearchTerm(e.target.value);
  };

  // Effect hook to trigger a search when the search term changes or is reset
  useEffect(() => {
    // Perform the search if the search term meets the minimum length requirement or is empty
    if (searchTerm.length >= 3 || searchTerm.length === 0) {
      // Call the onSearch callback with the current search term
      onSearch(searchTerm);
    }
  }, [searchTerm, onSearch]);

  // Render the SearchBar component with input for search and optional filter information
  return (
    <div className="SearchBar"> {/* Add the appropriate class here */}
      Search:
      <input
        type="text"
        placeholder=""
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {/* Display filter information if the filter is active */}
      {isFilterActive && <p>(filtered from total entries)</p>}
    </div>
  );
};

// Export the SearchBar component as the default export
export default SearchBar;
