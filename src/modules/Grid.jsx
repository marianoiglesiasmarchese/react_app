import React from 'react';
import Movie from './Movie';
import PropTypes from 'prop-types';
import '../App.css';

const Grid = ({ data, addFavorite }) => (
    <div className="grid">
        {data.map((element) => <Movie key={element.imdbID} data={element} addFavorite={addFavorite} />)}
    </div>
);

Grid.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    addFavorite: PropTypes.func
};

export default Grid;