import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';
import logo from './logo.png';

class FilmDetail extends Component {
    constructor () {
        super();
        this.state = {
            show: false
        };
    }

    render () {

// function FilmDetail ({match}) {
//     useEffect(() => {
//         fetchItem();
//         console.log(match);
//     }, []);
//     const {item, setItem} = useState ({});
//     const fetchItem = async () => {
//         const fetchItem = await fetch (
//         `https://ghibliapi.herokuapp.com/films/
//         ${match.params._id}`
//     );
//     const item = await fetchItem.json();
//     setItem(item);
//     console.log(item);
//     }

return (
    /*Trying to get the title to show*/
    <div>
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                    <div class="card mb-4 bg-dark text-light" >
                        <img src={logo} width="100%" height="225" background="#55595c" color="#eceeef" class="card-img-top" text="Thumbnail" />
                        <div class="card-body">
                        <p class="card-text"><strong>{this.props.title}</strong></p>
                        <p class="card-text"><strong>Director: </strong>{this.props.director}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small class="text-muted">{this.props.rt_score}</small>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    }
}

export default FilmDetail;