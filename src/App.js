import React from 'react';
import { Sandbox } from './Sandbox';
import { useLinearRegression } from './useLinearRegression';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sandbox usePredict={useLinearRegression}/>
    </div>
  );
}

export default App;
