import React from 'react';
import './App.css';

const Movie = ({ data }) => (
    <div className="movie">
        <span className="title">{`${data.Title} - ${data.Year}`}</span>
        <img className="poster" src={data.Poster} alt={`${data.Title}-img`} />
    </div>
);

export default Movie;