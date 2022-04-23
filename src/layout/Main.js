import React, { Component } from 'react';
import Loader from '../components/Loader';
import Movies from '../components/Movies';
import Search from '../components/Search';

class Main extends Component {
    state = {
        movies: [],
        loading: true
    }
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=329ffa13&s=panda`)
            .then(res => res.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=329ffa13&s=${str}${
            type !== "all" ? `&type=${type}` : ""
        }`)
            .then(res => res.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }
    render() {
        return (
            <div className='content container'>
                <Search searchMovies={this.searchMovies} />
                {this.state.loading
                ?(
                    <Loader />
                ) 
                : (<Movies movies={ this.state.movies } />)}
                
            </div>
        );
    }
}

export default Main;

