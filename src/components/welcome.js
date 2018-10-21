
import React, { Component } from 'react';
import '../App.css';
import Form from './Form';
import {Link} from 'react-router-dom';



class welcome extends Component {
  state = {
    recipes: []
  }
  search = async (e) => {
    const searchfood = e.target.elements.searchfood.value;
    e.preventDefault();
    //const api_call =  await fetch (`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    //const data = await api_call.json() ; 
    console.log(this.state.recipes);
  }

  render() {
    return (
      <div className = "App">
        <header className= "App-header">
          <h1 className= "App-title">FREE FOOD</h1>
        </header>
        <button type="button" class="btn btn-outline-warning btn-md">
        <Link to ={{
            pathname: `/`,
          }}>Back</Link>
          </button>
        <Form search = {this.search} />
      </div>
    );
  }
}

export default welcome;