// SortIcon.tsx

// Import necessary modules from React and react-icons
import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

// Define the properties expected by the SortIcon component
interface SortIconProps {
  direction: "asc" | "desc" | undefined; // Direction of sorting: ascending, descending, or undefined (unsorted)
}

// Define the SortIcon component as a functional component
const SortIcon: React.FC<SortIconProps> = ({ direction }) => {
  return (
    // Render a div with a class dynamically determined by the sorting direction
    <div className={`sort-icon ${direction}`}>
      {/* Display the up arrow icon if the direction is ascending */}
      {direction === "asc" && <AiOutlineArrowUp className="icon-up" />}
      {/* Display the down arrow icon if the direction is descending */}
      {direction === "desc" && <AiOutlineArrowDown className="icon-down" />}
    </div>
  );
};

// Export the SortIcon component as the default export
export default SortIcon;
