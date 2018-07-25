import React from 'react';
import './App.css';

const Movie = ({ data, addFavorite }) => (
    <div className="movie">
        <span className="title">{`${data.Title} - ${data.Year}`}</span>
        <img className="poster" src={data.Poster} alt={`${data.Title}-img`} />
        <button onClick={() => addFavorite(data)}>ADD</button>
    </div>
);

export default Movie;