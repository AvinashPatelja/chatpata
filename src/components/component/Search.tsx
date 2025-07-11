import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
//import SearchIcon from '@mui/icons-material/Search';

interface SearchProps {
  onSearch: (searchText: string) => void;
  placeholder?: string;
}

const Search = ({ onSearch, placeholder }: SearchProps) => {
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = () => {
    onSearch(searchItem);
  };

  const handleClear = () => {
    setSearchItem("");
    onSearch("");
  };

  const handleSearchKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <input
          className="input-search"
          type="text"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          onKeyDown={handleSearchKeyDown}
          placeholder={placeholder}
          style={{
            paddingRight: "30px", // space for icon
            //height: "36px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        {searchItem && (
          <ClearIcon
            onClick={handleClear}
            fontSize="small"
            style={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#888",
            }}
          />
        )}
        <button
          style={{
            marginLeft: "10px",
            backgroundColor: "#da9b26",
            color: "white",
          }}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
