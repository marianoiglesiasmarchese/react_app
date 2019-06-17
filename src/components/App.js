import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import fishes from '../sample-fishes';

class App extends React.Component{

    state = {
        fishes: {},
        order: {},
        number: 0,
        string: '',
        list: [],
    };

    // all the functions that update states should live in the same component that the state that is changing
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

    loadSampleFishes = () => {
        this.setState({
            fishes: fishes
        });
    };

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="fresh seafood market" bol={true} count="400" /> 
                    <ul className="fishes">
                        {
                            Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]}/>)
                        }
                    </ul>
                </div>
                <Order /> 
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/> 
            </div>
        )
    }
}

export default App;