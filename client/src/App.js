import React from 'react';
import './App.css';
// import {HttpLink} from 'apollo-link-http';
// import Chart from './components/Chart';
import Methodology from './components/Method.js';


function App () {
  return (
      <div className="App">
        <h1>GraphQL - MySQL - Apollo Test</h1>
        {/* <Chart/> */}
        <Methodology/>
      </div>
  );
}

export default App;
