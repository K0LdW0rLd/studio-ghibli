import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './About';
import Studio from './Studio';
import Ghibli from './Ghibli';
import logo from './logo.png';
import StudioGhibli from './StudioGhibli';
import FilmDetail from './FilmDetail'

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
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/ghibli" className="nav-link">Search</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/films" className="nav-link">Films</Link>
                </li>
              </ul>
            </div>
          </nav>
          <h1>Studio Ghibli App</h1>
          <Route path = '/' exact component = {Studio} />
          <Route path = '/about' component = {About} />
          <Route path="/ghibli" component={Ghibli} />
          <Route path='/films' exact component={StudioGhibli} />
          <Route path='/films/:id' component = {FilmDetail}/>
        </div>
      </Router>
    );
  }
}

export default App;
