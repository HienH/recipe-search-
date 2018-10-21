import React, { Component } from 'react';
import './App.css';  
import {Link} from 'react-router-dom';

class App extends Component {
render() {
    return (
      <div className = "welcome">
        <header className= "App-header">
          <h1 className= "App-title">FREE FOOD</h1>
        </header>
        <p>
          Are you a 
        </p>
        <button class="btn btn-outline-warning btn-lg">
          <Link to ={{
            pathname: `/givemefood`,
            //state: {recipe: recipe.title}
          }}>RECEIEVER</Link>
        </button>

        <button type="button" class="btn btn-outline-success btn-lg">
        <Link to ={{
            pathname: `/donate`,
            //state: {recipe: recipe.title}
          }}>GIVER</Link>
          </button>

      </div>
    );
  }
}

export default App;