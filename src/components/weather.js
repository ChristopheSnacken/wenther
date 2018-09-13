import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

class Weather extends React.Component{


  render(){


    return(
      <div>

          {this.props.country && this.props.city && <p><b>{this.props.city}, {this.props.country}</b></p> }

          {this.props.all && this.props.all.map(x =>
            <Card>
              <CardContent>
                <Typography color="textSecondary">
                  {x.dt_txt}
                </Typography>
                <Typography>

                  <img src={`http://openweathermap.org/img/w/${x.weather[0].icon}.png`} alt="icon"/>
                </Typography>
                <Typography variant="headline" component="h2">
                  {x.main.temp} <i>&deg;C</i>
                </Typography>
                <Typography component="p">
                  Humidity: {x.main.humidity} <i>%</i>
                </Typography>
              </CardContent>
            </Card>)}

          {this.props.error && <p>{this.props.error}</p>}

      </div>


    )
  }
}
export default Weather;
