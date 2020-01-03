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
            <p><span>Producer:</span> {this.props.producer}</p>
            <p><span>Release Date:</span> {this.props.release_date}</p>
            <p><span>Rotten Tomato Score:</span> {this.props.rt_score}</p>
            <p><span>Description:</span> {this.props.description}</p>
          </a>
        </div>
      )
    }
  }
  
  export default Modal;