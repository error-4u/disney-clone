
import React from 'react';

// eslint-disable-next-line no-unused-vars
import Counter from './features/counter/Counter';
import Header from './components/Header';

import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <Home />
    </div>
  );
}

export default App;
