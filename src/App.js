import React, { Component } from 'react';
import './App.css';
import Api from './Api';
import Search from './Search';
import Grid from './Grid';

const api = new Api();

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }

  handleSearchChange = (query) => {
    api.get('s=' + query).then((result) => {
      this.setState({
        data: result.Search || [],
      });
    });
  }

  render() {
    return (
      <div className="container">
        <Search onSearch={this.handleSearchChange} />
        <Grid data= {this.state.data}/>
      </div>
    );
  }
}

export default App;
