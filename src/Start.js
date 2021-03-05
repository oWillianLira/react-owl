import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Start = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link></Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
};

export default Start;
