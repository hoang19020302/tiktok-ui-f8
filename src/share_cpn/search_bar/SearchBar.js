import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.scss"; // Import CSS hoặc SCSS cho search bar

function SearchBar({ placeholder = "Tìm kiếm", onChange }) {
  return (
    <div className="search-bar">
      <div className="search-icon">
        <FontAwesomeIcon
          className="color-icon"
          style={{ fontSize: "18px" }}
          icon={faMagnifyingGlass}
        />
      </div>
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
