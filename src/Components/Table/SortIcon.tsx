// SortIcon.tsx
import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
// import "./SortIcon.css"; // Assurez-vous d'importer le fichier CSS pour vos styles

interface SortIconProps {
  direction: "asc" | "desc" | undefined;
}

const SortIcon: React.FC<SortIconProps> = ({ direction }) => {
  return (
    <div className={`sort-icon ${direction}`}>
      {direction === "asc" && <FaArrowUp />}
      {direction === "desc" && <FaArrowDown />}
    </div>
  );
};

export default SortIcon;
