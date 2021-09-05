import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Assessment from './components/assessment';
import Leaderboard from './components/leaderboard';
import Login from './components/login';
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
  let user = localStorage.getItem('username');
  const [username, setUsername] = useState(user);
  const [lnk, setLnk] = useState('');
  useEffect(() => {
    let l = '';
    if (username) {
      l = (
        <Toolbar>
          <Link style={linkStyle} to="/">
            Assessment
          </Link>
          <Link style={linkStyle} to="/leaderboard">
            Leaderboard
          </Link>
          <Link style={linkStyle} to="/login">
            Logout
          </Link>{' '}
        </Toolbar>
      );
    }
    setLnk(l);
  }, [username]);

  return (
    <Router>
      <div>
        <AppBar position="static">{lnk}</AppBar>

        <Switch>
          <Route exact path="/">
            <Assessment />
          </Route>
          <Route exact path="/login">
            <Login setUsername={setUsername} />
          </Route>
          <Route exact path="/leaderboard">
            <Leaderboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
