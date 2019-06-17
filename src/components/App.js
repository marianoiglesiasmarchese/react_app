import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component{

    state = {
        fishes: {},
        order: {},
        number: 0,
        string: '',
        list: [],
    };

    addFish = (fish) => {
        // 1. take a copy of the existing state
        const fishes={...this.state.fishes};
        // 2. add out new fish
        fishes[`fish_${Date.now()}`] = fish;
        // 3. set the new feshes object to state
        // set state react function let us to update the state partially, is not necessary to update all the stuff that we have there
        this.setState({
            fishes: fishes
        });
        // with ES6 if we are setting a property with same name than the value that we want to pass, it could be written like the following avoiding boilerplate words
        // this.setState({ fishes });
    };

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="fresh fish" bol={true} count="400" /> 
                </div>
                <Order /> 
                <Inventory addFish={this.addFish}/> 
            </div>
        )
    }
}

export default App;