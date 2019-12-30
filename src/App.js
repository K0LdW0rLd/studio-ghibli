import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './About';
import Studio from './Studio';
import Ghibli from './Ghibli';
import logo from './logo.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div className = 'container'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href='#' target="_blank">
              <img src = {logo} width= '80' height='50' alt = 'Studio Ghibli Logo' />
            </a>
            <Link to='/' className= 'navbar-brand'>Home</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">About</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/ghibli" className="nav-link">Ghibli</Link>
                </li>
              </ul>
            </div>
          </nav>
          <h2>Studio Ghibli App</h2>
          <Route path = '/' exact component = {About} />
          <Route path = '/studio/:id' component = {Studio} />
          <Route path="/ghibli" component={Ghibli} />
        </div>
      </Router>
    );
  }
}

export default App;
