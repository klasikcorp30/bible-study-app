import React from 'react';
import './App.css';
import MenuRouter from './components/MenuRouters/MenuRouter';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Chat from './components/Chat/Chat';
import News from './components/News/News';
import Study from './components/Study/Study';
import Bible from './components/Bible/Bible';

function App() {
  return (
    <div className="App">
      <MenuRouter />
    </div>
  );
}

export default App;
