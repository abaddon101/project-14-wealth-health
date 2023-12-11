// EntriesPerPageDropdown.tsx

// Import necessary modules from React
import React, { useState } from "react";

// Define the properties expected by the EntriesPerPageDropdown component
interface EntriesPerPageDropdownProps {
  onChange: (value: number) => void; // A function to handle the change in entries per page
}

// Define the EntriesPerPageDropdown component as a functional component
const EntriesPerPageDropdown: React.FC<EntriesPerPageDropdownProps> = ({
  onChange,
}) => {
  // Define an array of options for the entries per page dropdown
  const entriesPerPageOptions = [10, 25, 50, 100];

  // Use state to manage the currently selected option in the dropdown
  const [selectedOption, setSelectedOption] = useState(
    entriesPerPageOptions[0]
  );

  // Event handler for when the user selects a different option in the dropdown
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Extract the selected value from the event and convert it to a number
    const selectedValue = Number(event.target.value);

    // Update the state with the selected option
    setSelectedOption(selectedValue);

    // Call the onChange callback with the selected value to notify the parent component
    onChange(selectedValue);
  };

  // Render the dropdown component with the selected option and options from the array
  return (
    <div className="EntriesPerPageDropdown">
      {" "}
      {/* Add the appropriate class here */}
      Show{" "}
      <select value={selectedOption} onChange={handleSelect}>
        {/* Map over the entriesPerPageOptions array to create option elements */}
        {entriesPerPageOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>{" "}
      entries
    </div>
  );
};

// Export the EntriesPerPageDropdown component as the default export
export default EntriesPerPageDropdown;
