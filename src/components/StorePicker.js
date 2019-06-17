import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

    myInput = React.createRef();

    handleSubmit = event => {
        // 1. stop the form from submitting
        event.preventDefault();
        // 2. get the text from that input >> GOLDEN RULE: in REACT, don't touch the DOM!!!
        const storeName = this.myInput.current.value;
        // 3. change the page to /store/whatever-they-enter 
        this.props.history.push(`/store/${storeName}`);
    };

    render(){
        return (
            <>
            {/* comment */}
            <p> fish </p>
            <form className='store-selector' onSubmit={this.handleSubmit}>    
                <h2> please inser a store </h2>
                <input 
                type='text' 
                ref={this.myInput}
                required 
                placeholder='store name' 
                defaultValue={getFunName()}             
                />
                <button type="submit">visit store -></button>
            </form>
            </>
        ) 
    }
}

export default StorePicker;