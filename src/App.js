import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Assessment from './components/assessment';
import Leaderboard from './components/leaderboard';

import './style.css';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Assessment</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
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
