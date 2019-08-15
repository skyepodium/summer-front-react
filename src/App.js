import React from 'react';
import TheHeader from './layouts/TheHeader.js'
import TheTitle from './layouts/TheTitle.js'
import Main from './views/Main.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <TheHeader/>
      <TheTitle/>
      <Main/>
    </div>
  );
}

export default App;
