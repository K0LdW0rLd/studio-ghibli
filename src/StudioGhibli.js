import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import FilmDetail from './FilmDetail';

class StudioGhibli extends Component {
    constructor () {
        super();
        this.state = {
            GData: [],
        };
    }

    componentDidMount () {
        console.log('I am doing something')
        axios.get('http://localhost:8080/studio/')
            .then(res => {
                console.log(res)
                this.setState({ GData: res.data });
                console.log(this.state.GData)
            })
            .catch(function (error){
                console.log(error);
            });
    }

    render () {
        let filmResults = this.state.GData
        const studio = filmResults.map(film=>{
            return <FilmDetail key = {film.title}
            title = {film.title}
            director = {film.director}
            producer = {film.producer}
            description = {film.description}
            rt_score = {film.rt_score}
            />})

        return (
            <div>
                <h2>All the Studio Ghibli Films</h2>
                {/* Meant to link to the film id and pull info */}
                {/* <div>
                    {data.map(i => (
                        <p key={i.id}>
                            <Link to={`/films/${i._id}`}>{i.title}</Link>
                        </p>
                    ))}
                </div> */}
                <div>
                    {studio}
                </div>
            </div>
        )
    }
}

export default StudioGhibli;