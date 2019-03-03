import React from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  font-size: 18px;
  background: #f1f1f1;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 15px 0;
`

const SearchBar = ({ value, onChange }) => (
  <SearchInput
    type="text"
    value={value}
    placeholder="Search here..."
    onChange={e => onChange(e.target.value)}
  />
);

export default SearchBar;
