import React from 'react';
import './App.css';

import EventList from './components/EventList';

import data from './data';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hacker Fun</h1>
      </header>
      <EventList events={data} />
    </div>
  );
}

export default App;
