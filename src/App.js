import React from 'react';
import {Router, Link} from '@reach/router';
import Home from "./components/Home"
import Background from "./components/Background"
import Word from "./components/Word"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Nav Hello!</h1>
      <Link to="/home">Home</Link>
      <Router>
        <Home path="/home" />
        <Word path="/:word" />
        <Background path="/:word/:color/:bgColor" />
      </Router>
    </div>
  );
}

export default App;
