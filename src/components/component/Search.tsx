import { useState } from "react";

interface SearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const Search = ({onSearch, placeholder}: SearchProps) => {
    const [searchItem, setSearchItem] = useState("");

  const handleSearch = () => {
    onSearch(searchItem);
  };

  return (
    <>
    <div style={{ textAlign: "center" }}>
            <input
              className="input-search"
              type="text"
              onChange={(e) => setSearchItem(e.target.value)}
              placeholder={placeholder}
            />
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
  )
}

export default Search