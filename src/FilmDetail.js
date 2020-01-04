import React, {Component} from 'react';
import Modal from './Modal';

class FilmDetail extends Component {
    constructor () {
        super();
        this.state = {
            show: false
        };
    }

    render () {
        const {show} = this.state;

    return (
        <div>
            <a href ='#' onClick={() => this.setState({ show: !show })}>
                <h6>{this.props.title}</h6>
            </a>
            {show ?  (<a href = '#' onClick={() => this.setState({ show: !show })}>
                <Modal 
                title = {this.props.title}
                director = {this.props.director}
                producer = {this.props.producer}
                description = {this.props.description}
                release_date = {this.props.release_date}
                rt_score = {this.props.rt_score}
                /></a>
            ) : null }
        </div>
        )
    }
}

export default FilmDetail;