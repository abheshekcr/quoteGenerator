import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import RandomGen from './components/RandomGen.component';

function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/"component={RandomGen}/>
      </Router>
   
    </div>
  );
}

export default App;
