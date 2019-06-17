import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component{
    render() {
        // ES6 allow us to handle substructures with only needed information for our component
        const { image, name, price, desc } = this.props.details;
        return (
            <li className="menu-fish">
                <image src={image} alt={name}/>
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button> add to cart! </button>
            </li>            
        )
    }
}

export default Fish;