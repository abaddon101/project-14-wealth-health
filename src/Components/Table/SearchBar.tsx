// SearchBar.tsx
import React, { useState, useEffect } from "react";

interface SearchBarProps {
  onSearch: (term: string) => void;
  isFilterActive: boolean; // Nouvelle propriété pour indiquer si le filtre est actif
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isFilterActive }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm.length >= 3 || searchTerm.length === 0) {
      onSearch(searchTerm);
    }
  }, [searchTerm, onSearch]);

  return (
    <div className="SearchBar"> {/* Ajouter la classe ici */}
      Search:
      <input
        type="text"
        placeholder=""
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {isFilterActive && <p>(filtered from total entries)</p>}
    </div>
  );
};

export default SearchBar;
