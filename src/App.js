import React from 'react';
import { Sandbox } from './Sandbox';
import './App.css';
import { useLinearRegression } from './useLinearRegression';
import { useAverage } from './useAverage';

const methods = [useLinearRegression, useAverage];

function App() {
  const [idx, setIdx] = React.useState(0);
  return (
    <div className="App">
      <button onClick={() => setIdx(idx => (idx + methods.length- 1) % methods.length )}>prev</button>
      <button onClick={() => setIdx(idx => (idx + 1) % methods.length)}>next</button>
      <Sandbox usePredict={methods[idx]}/>
    </div>
  );
}

export default App;
