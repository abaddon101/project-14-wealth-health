// TableInfo.tsx
import React, { useState } from "react";

interface TableInfoProps {
  startRange: number;
  endRange: number;
  totalEmployees: number;
  filteredEmployees: number;
  searchTerm: string; // Ajoutez searchTerm à la liste des propriétés
}
const TableInfo: React.FC<TableInfoProps> = ({
  startRange,
  endRange,
  totalEmployees,
  filteredEmployees,
  searchTerm,
}) => {
  // const [searchTerm, setSearchTerm] = useState<string>("");
  // console.log("Search Term:", searchTerm);

  // Utilisation de la condition (filtered from total entries)
  // uniquement si filteredEmployees est supérieur à 0 et totalEmployees supérieur à 0
  // const trimmedSearchTerm = searchTerm.trim();

  const entriesInfo =
    searchTerm.trim().length > 0
      ? ` (filtered from ${totalEmployees} total entries)`
      : "";

  return (
    <div>
      Showing {startRange} to {filteredEmployees} of {filteredEmployees} entries
      {entriesInfo}
    </div>
  );
};

export default TableInfo;
