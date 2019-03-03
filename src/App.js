import React, { useState } from "react";
import "./App.css";

import EventList from "./components/EventList";
import EventFilters from "./components/EventFilters";
import SearchBar from "./components/SearchBar";

import data from "./data";

const App = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState([]);

  const events = data
    .filter(({ labels }) =>
      labels.some(label => filters.length === 0 || filters.includes(label))
    )
    .filter(
      ({ name }) =>
        search.length === 0 ||
        name.toLocaleLowerCase().includes(search.toLowerCase())
    );
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hacker Fun</h1>
      </header>
      <SearchBar value={search} onChange={setSearch} />
      <EventFilters filters={filters} setFilters={setFilters} />
      <EventList events={events} />
    </div>
  );
};

export default App;
