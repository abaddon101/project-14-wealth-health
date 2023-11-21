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
      Showing{" "}
      {totalEmployees > 0
        ? `${startRange} to ${endRange} of ${totalEmployees}`
        : "0 to 0 of 0"}{" "}
      entries
    </div>
  );
};

export default TableInfo;
