import React from 'react';
import './App.css';
import MenuRouter from './components/MenuRouters/MenuRouter';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Sermon from './components/News/News';
import Study from './components/Study/Study';
import Bible from './components/Bible/Bible';

function App() {
  return (
    <div className="App">
    <Router>
      <MenuRouter />
        <Switch>
          <Route path="/" exact component={Bible} />
          <Route path="/chat" component={Chat}/>
          <Route path="/sermons" component={Sermon}/>
          <Route path="/study" component={Study}/>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
