import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'


  class App extends React.Component {


    state = {
      all: undefined,
      city: undefined,
      country: undefined,
      error: undefined
    }

    componentDidMount() {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      function success(pos) {
        var crd = pos.coords;

        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${crd.latitude}&lon=${crd.longitude}&appid=c6b4119974f75434fad9c40a13358dc5`)
          .then(res => res.json())
          .then(
            (response) => {
              console.log(response)
              this.setState({
                all: response.list,
                city: response.city.name,
                country: response.city.country,
                error: ""
              });
            },

            (error) => {
              this.setState({
                error: "Could not read your location",
                error
              });
            }
          )
        }



      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

      navigator.geolocation.getCurrentPosition(success, error, options);

}




    getWeather = async (e) => {

      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=c6b4119974f75434fad9c40a13358dc5`);
      const response = await api_call.json();
      console.log(response);

      if(city && country){
        this.setState({
          all: response.list,
          city: response.city.name,
          country: response.city.country,
          error: ""
        })
      }else{
          this.setState({
          error: "Please enter the values..."
          })
      }
    }



   render() {
    return (
     <div>
       <Titles />
       <Form loadWeather={this.getWeather} />
       <Weather temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          all={this.state.all}
          error={this.state.error}/>
     </div>
    )
  }
}
export default App;
