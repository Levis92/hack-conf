import React from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  box-sizing: border-box;
  font-size: 2.2rem;
  background: white;
  border: 2px solid #eaeaea;
  outline: none;
  border-radius: 4px;
  padding: 1rem 2rem;
  margin: 1.5rem 0;
  width: 95%;
  max-width: 60rem;
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
