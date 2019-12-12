import React from 'react';
import './App.css';
// import Chart from './components/Chart';
import Queries from './components/Queries.js';
import Methodology from './components/Method.js';


function App () {
  return (
      <div className="App">
        <h2>GraphQL - MySQL - Apollo Test</h2>
        <Queries/>
        <Methodology/>
      </div>
  );
}

export default App;
