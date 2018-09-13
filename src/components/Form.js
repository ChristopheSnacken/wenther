import React from 'react';
import { Link } from 'react-router-dom'
import './Form.css';
import Input from '@material-ui/core/Input';

export default class Form extends React.Component{
render(){
  return (
    <form onSubmit = {this.props.loadWeather}>
      <div className="form">
      <Input
        className="inputField"
        placeholder="City..."
        type="text"
        name="city"
      />
      <Input
        className="inputField"
        placeholder="Country..."
        type="text"
        name="country"
      />

     <button className="inputButton">Get Weather</button>
   </div>
    </form>
  )
}
}
