// SortIcon.tsx
import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
// import "./SortIcon.css"; // Assurez-vous d'importer le fichier CSS pour vos styles

interface SortIconProps {
  direction: "asc" | "desc" | undefined;
}

const SortIcon: React.FC<SortIconProps> = ({ direction }) => {
  return (
    <div className={`sort-icon ${direction}`}>
      {direction === "asc" && <AiOutlineArrowUp className="icon-up" />}
      {direction === "desc" && <AiOutlineArrowDown className="icon-down" />}
    </div>
  );
};

export default SortIcon;
