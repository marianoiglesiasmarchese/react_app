import React from 'react';
import Movie from './Movie';
import './App.css';

const Grid = ({ data }) => (
    <div className="grid">
        {data.map((element) => <Movie key={element.imdbID} data={element} />)}
    </div>
);

export default Grid;