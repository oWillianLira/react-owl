import React from 'react';
import Intro from './sections/intro';
import Resume from './sections/resume';
import Portfolio from './sections/portfolio';
import Contact from './sections/contact';
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
                <Link to="/">Intro</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <Switch>
          <Route exact path="/">
            <Intro></Intro>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route path="/portfolio">
            <Portfolio></Portfolio>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Start;
