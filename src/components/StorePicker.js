import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    render(){
        return (
            <>
            {/* comment */}
            <p> fish </p>
            <form className='store-selector'>    
                <h2> please inser a store </h2>
                <input type='text' required placeholder='store name' defaultValue={getFunName()}></input>
                <button type="submit">visit store -></button>
            </form>
            </>
        ) 
    }
}

export default StorePicker;