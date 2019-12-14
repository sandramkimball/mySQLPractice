import React from 'react';
import './App.css';
// import Chart from './components/Chart';
import GetData from './components/GetData.js';
import FilterBy from './components/FilterBy';
import Methodology from './components/Method.js';


function App () {
  return (
      <div className="App">
        <h2>GraphQL - MySQL - Apollo Test</h2>
        {/* <FilterBy/> */}
        <GetData/>
        <Methodology/>
      </div>
  );
}

export default App;
