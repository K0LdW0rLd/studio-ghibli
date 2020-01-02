import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';

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
        <h3>{this.props.title}</h3> 
        <div>
            <p>{this.props.director}</p>
            <p>{this.props.producer}</p>
            <p>{this.props.rt_score}</p>
            <p>{this.props.description}</p>
        </div>
    </div>
    )
    }
}

export default FilmDetail;