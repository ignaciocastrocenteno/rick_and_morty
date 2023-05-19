import React from "react";
import SearchBar from "../searchBar/SearchBar";

export default function Nav({onSearch}) {
  return <SearchBar onSearch={onSearch} />;
}
