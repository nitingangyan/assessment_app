import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Assessment from './components/assessment';
import Leaderboard from './components/leaderboard';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import './style.css';

export default function App() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'rgb(255, 255, 255)',
    fontWeight: 'bold',
    padding: '5px',
    margin: '5px'
  };
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Link style={linkStyle} to="/">
              Assessment
            </Link>
            <Link style={linkStyle} to="/leaderboard">
              Leaderboard
            </Link>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/">
            <Assessment />
          </Route>
          <Route exact path="/leaderboard">
            <Leaderboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
