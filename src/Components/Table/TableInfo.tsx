// TableInfo.tsx
import React, { useState } from "react";

interface TableInfoProps {
  startRange: number;
  endRange: number;
  totalEmployees: number;
  filteredEmployees: number;
  searchTerm: string;
}

const TableInfo: React.FC<TableInfoProps> = ({
  startRange,
  endRange,
  totalEmployees,
  filteredEmployees,
  searchTerm,
}) => {
  const entriesInfo =
    searchTerm.trim().length > 0
      ? ` (filtered from ${totalEmployees} total entries)`
      : "";

  return (
    <div>
      Showing {filteredEmployees === 0 ? 0 : startRange} to {filteredEmployees} of {filteredEmployees} entries
      {entriesInfo}
    </div>
  );
};

export default TableInfo;
