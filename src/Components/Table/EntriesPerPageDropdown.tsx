// EntriesPerPageDropdown.tsx
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

interface EntriesPerPageDropdownProps {
  onChange: (value: number) => void;
}

const EntriesPerPageDropdown: React.FC<EntriesPerPageDropdownProps> = ({
  onChange,
}) => {
  const entriesPerPageOptions = [10, 25, 50, 100];
  const [selectedOption, setSelectedOption] = useState(
    entriesPerPageOptions[0]
  );

  const handleSelect = (value: string | null) => {
    if (value !== null) {
      const selectedValue = Number(value);
      setSelectedOption(selectedValue);
      onChange(selectedValue);
    }
  };

  return (
    <div className="EntriesPerPageDropdown"> {/* Ajouter la classe ici */}
      <Dropdown onSelect={handleSelect}>
        Show <Dropdown.Toggle variant="success" id="dropdown-basic">{`  ${selectedOption}  `}</Dropdown.Toggle> entries
        <Dropdown.Menu>
          {entriesPerPageOptions.map((option) => (
            <Dropdown.Item key={option} eventKey={String(option)}>
              {` ${option} `}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default EntriesPerPageDropdown;
