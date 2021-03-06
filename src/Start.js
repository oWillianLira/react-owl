import React from 'react';
import Resume from './sections/resume';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import me from './assets/img/general/helloblue.png';

const Start = () => {
  return (
    <Router>
      <div className="oApp">
        <aside className="oMenu box">
          <header className="intro">
            <div className="me">
              <img src={me} alt="It's me" />
            </div>
            <div className="info">
              <h1>Willian Lira</h1>
              <h2>Front-End Developer</h2>
            </div>
          </header>
          <nav>
            <ul>
              <li>
                <Link>Resume</Link>
              </li>
              <li>
                <Link>Portfolio</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <Switch>
          <Route path="/">
            <Resume></Resume>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Start;
