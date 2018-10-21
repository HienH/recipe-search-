import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import ImageInput from './ImageInput'

class donate extends Component {
        

  render() {
    return (
       <form  style ={{marginBottom: '2rem'}}>
            <input className= 'form__input' type= "text" name= 'searchfood'/>
            <button className= 'form__button'>Search</button>
        </form>
 
 )
}
}
export default donate