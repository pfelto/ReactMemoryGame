import React from 'react';
import CellGrid from './components/CellGrid';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row my-1">
          <div className="col text-center">
            You will have 3 seconds to memorize 6 blue random cells
          </div>
        </div>
        <CellGrid />
        <div className="row my-1">
          <button className="col">Start</button>
          <div className="col text-end">Click the Start button to play</div>
        </div>
      </div>
    </div>
  );
}

export default App;
