import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import GroupPage from './pages/GroupPage/GroupPage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/GroupB" component={GroupPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
