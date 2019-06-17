import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component{

    handleClick = () => {
        this.props.addToOrder(this.props.index);
    };

    render() {
        // ES6 allow us to handle substructures with only needed information for our component
        const { name, price, desc, status } = this.props.details;
        const isAvailable = status === 'available';
        return (
            <li className="menu-fish">
                {/* <image src={image} alt={name}/> image folder is not in the project */}
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={this.handleClick}> {isAvailable ? 'add to order!' : 'sold out!'} </button>
            </li>            
        )
    }
}

export default Fish;