import React from 'react';
import './App.css';
import Main from './Main';
import Navigation from './Navigation';

const App: React.FC = () => (
  <div className="App">
    <Navigation />
    <Main />
  </div>
);

export default App;
