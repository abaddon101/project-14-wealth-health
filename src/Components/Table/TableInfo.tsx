// TableInfo.tsx
import React from "react";

interface TableInfoProps {
  startRange: number;
  endRange: number;
  totalEmployees: number;
}

const TableInfo: React.FC<TableInfoProps> = ({
  startRange,
  endRange,
  totalEmployees,
}) => {
  return (
    <div>
      Showing {startRange} to {endRange} of {totalEmployees} entries
    </div>
  );
};

export default TableInfo;
