import React from 'react';
import Movie from './Movie';
import './App.css';

const Grid = ({ data, addFavorite }) => (
    <div className="grid">
        {data.map((element) => <Movie key={element.imdbID} data={element} addFavorite={addFavorite} />)}
    </div>
);

export default Grid;