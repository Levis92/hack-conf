import React from "react";
import styled from "styled-components";
import data from "../../data";

const filterTypes = data.reduce((prev, curr) => {
  curr.labels.forEach(label => prev.add(label));
  return prev;
}, new Set([]));

const EventFilters = ({ filters, setFilters }) => {
  const toggleFilter = (filterType, checked) => {
    if (checked) {
      setFilters(filters.filter(filter => filterType !== filter));
    } else {
      setFilters([...filters, filterType]);
    }
  };
  return (
    <div>
      {[...filterTypes].map((filterType, index) => (
        <Filter
          key={index}
          filterType={filterType}
          checked={filters.includes(filterType)}
          toggleFilter={toggleFilter}
        />
      ))}
    </div>
  );
};

const FilterLabel = styled.label`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const Filter = ({ filterType, checked, toggleFilter }) => (
  <FilterLabel>
    <input
      type="checkbox"
      checked={checked}
      onChange={() => toggleFilter(filterType, checked)}
    />
    {filterType}
  </FilterLabel>
);

export default EventFilters;
