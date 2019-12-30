import React, { Component } from 'react';
import axios from 'axios';



class Ghibli extends Component {
    constructor(props) {
        super (props);
        this.state = {
            query: '',
            results: [],
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getInfo = this.getInfo.bind(this);
    }
    getInfo() {
        axios.get('http://localhost:8080/studio/')
            .then(res => {
                this.setState({ 
                    results: res.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }
    handleInputChange() {
        this.setState ({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length >1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            }
        });
    };
    render (){
        return (
            <div>
                <h1>Search the  Ghibli</h1>
                <div>
                    <form>
                        <input
                            placeholder="Search for ..."
                            ref = {input => this.search = input}
                            onChange = {this.handleInputChange}
                            />
                            <p>{this.state.query}</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Ghibli;