import React from 'react';

class EditFishForm extends React.Component{

    handleChange = (event) => {
        // 1. take a copy of the fish and update it
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name] : event.currentTarget.value
        }
        // 2. update fish on parent state
        this.props.updateFish(this.props.index, updatedFish);
    };

    render() {
        return (
            <div className="fish-edit"  > 
                < input name="name" type="text" placeholder="Name" onChange={this.handleChange} value={this.props.fish.name}/>
                < input name="price"  type="text" placeholder="Price" onChange={this.handleChange} value={this.props.fish.price}/>
                < select name="status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                < textarea name="desc" placeholder="Desc" onChange={this.handleChange} value={this.props.fish.desc}/>
                < input name="image" type="text" placeholder="Image" onChange={this.handleChange} value={this.props.fish.image}/>
                <button type="submit"> Add fish</button>
            </div>
        )
    }
};

export default EditFishForm;