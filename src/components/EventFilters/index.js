import React from "react";
import styled from "styled-components";
import data from "../../data";

const filterTypes = data.reduce((prev, curr) => {
  curr.labels.forEach(label => prev.add(label));
  return prev;
}, new Set([]));

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  max-width: 60rem;
  margin-bottom: 1.5rem;
`

const EventFilters = ({ filters, setFilters }) => {
  const toggleFilter = (filterType, checked) => {
    if (checked) {
      setFilters(filters.filter(filter => filterType !== filter));
    } else {
      setFilters([...filters, filterType]);
    }
  };
  return (
    <FilterContainer>
      {[...filterTypes].map((filterType, index) => (
        <Filter
          key={index}
          filterType={filterType}
          checked={filters.includes(filterType)}
          toggleFilter={toggleFilter}
        />
      ))}
    </FilterContainer>
  );
};

const FilterLabel = styled.label`
  font-size: 1.6rem;
  height: 2.5rem;
  vertical-align: middle;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  margin: 0.5rem;
  position: relative;
  padding-left: 3.5rem;
  margin-bottom: 1.2rem;
  cursor: pointer;
  user-select: none;
  input {
    margin-right: 0.5rem;
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked ~ .checkmark {
      background-color: #2196F3;
      &:after {
        display: block;
      }
    }
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 2.5rem;
    width: 2.5rem;
    background-color: #eee;
    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 0.9rem;
      top: 0.5rem;
      width: 0.5rem;
      height: 1rem;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }
`;

const Filter = ({ filterType, checked, toggleFilter }) => (
  <FilterLabel>
    <input
      type="checkbox"
      checked={checked}
      onChange={() => toggleFilter(filterType, checked)}
    />
    {filterType}
    <span className="checkmark"></span>
  </FilterLabel>
);

export default EventFilters;
