import React, {Component} from 'react';
import logo from './logo.png';
import './Modal.css';

class Modal extends Component {
    render () {
      return (
        <div className = 'info'>
          <a className = 'decoration'>
            <h1>{this.props.title}</h1>
            <img className = 'imgbor' src={logo} alt='Studio Ghibli Logo'></img>
            <p><strong>Director:</strong> {this.props.director}</p>
            <p><strong>Producer:</strong> {this.props.producer}</p>
            <p><strong>Release Date:</strong> {this.props.release_date}</p>
            <p><strong>Rotten Tomato Score:</strong> {this.props.rt_score}</p>
            <p><strong>Description:</strong> {this.props.description}</p>
          </a>
        </div>
      )
    }
  }
  
  export default Modal;