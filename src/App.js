import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Page from './Page';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

const App = () => {
  return (
    <div className="App">
      <Router>
        <header>
          <Link className="heading" to="/"><h1>Escape the Lab</h1></Link>
          <img src={logo} className="App-logo" alt="Escape the Lab logo" />
          <h2>Choose your topic</h2>
          <Form />
        </header>
        <div>
          <Switch>
            <Route path="/science-enquiry">
              <Page title="Science Enquiry" secret={448262} />
            </Route>
            <Route path="/science-skills-1">
              <Page title="Science Skills 1" secret={364251} />
            </Route>
            <Route path="/science-skills-2">
              <Page title="Science Skills 2" secret={743998} />
            </Route>
            <Route path="/lab-safety">
              <Page title="Lab Safety" secret={381645} />
            </Route>
          </Switch>
        </div>
        </Router>
      <style jsx>{`
        .heading {
          color: white;
          text-decoration: none;
        }
        .heading:hover {
          text-decoration: underline;
        }
        h1 {
          color: white;
          font-size: 3rem;
          margin: 3rem auto;
        }
        ul {
          list-style: none;
        }
        li {
          border-right: 1px solid white;
          display: inline;
          padding: 0 1rem;
        }
        li:last-child {
          border-right: none;
        }
        li a {
          color: white;
        }
      `}</style>
    </div>
  );
}

export default App;
