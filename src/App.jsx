import React from 'react';
import './App.css';
import Home from './modules/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const App = () => (
  <Router>
    <Route exact path="/" component={Home} /> 
</Router>
  
);

export default App;