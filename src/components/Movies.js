import React from 'react';
import Movie from './Movie';

const Movies = ({
    movies = []
}) => {
    return (
        <div className='movies'>
            {movies.length
            ? movies.map(movie => (
                <Movie key={movie.imdbID} {...movie} />
            ))
        : (
            <div className='no-result'>
                <h2>Nothing found!</h2>
            </div>
        )}
        </div>
    );
}

export default Movies;
