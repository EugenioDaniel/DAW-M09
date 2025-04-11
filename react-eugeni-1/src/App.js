// App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import AppE1 from './App-e1';
import AppE2 from './App-e2';
import AppE3 from './App-e3';
import AppE4 from './App-e4';
import AppE5 from './App-e5';
import AppE6 from './App-e6';
import AppE7 from './App-e7';
import AppE8 from './App-e8';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Selector de Ejemplos hechos de la web del ejercicio:</h1>
        <div>
          {[...Array(8)].map((_, index) => (
            <Link key={index} to={`/app-e${index + 1}`}>
              <button style={{ margin: '5px' }}>Ir a App-e{index + 1}</button>
            </Link>
          ))}
        </div>

        <Routes>
          <Route path="/app-e1" element={<AppE1 />} />
          <Route path="/app-e2" element={<AppE2 />} />
          <Route path="/app-e3" element={<AppE3 />} />
          <Route path="/app-e4" element={<AppE4 />} />
          <Route path="/app-e5" element={<AppE5 />} />
          <Route path="/app-e6" element={<AppE6 />} />
          <Route path="/app-e7" element={<AppE7 />} />
          <Route path="/app-e8" element={<AppE8 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
