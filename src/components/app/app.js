import React from 'react';
import './app.css';
import SearchForm from '../search-form';
import WeatherCart from '../weather-cart/weather-cart';
import OpenweathermapApi from '../../openweathermapApi/openweathermapApi';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          searchRequest: '',
          id: null,
          cityName: '',
          temp: null        
        };

        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }
    weatherApi = new OpenweathermapApi();
    

    onSubmit(event) {
        this.weatherApi.getCityData(this.state.searchRequest)
          .then(data => this.setState({
            id: data.id,
            cityName: data.name,
            temp: data.temp
          }));
          
        event.preventDefault();
      }

    onChangeSearch(event) {
        this.setState({searchRequest: event.target.value})
    }   
    

    render() {
        return (
            <div>
                <h2>Weather</h2>
                <SearchForm 
                    onSubmit = {this.onSubmit}
                    //onChangeSearch = {this.onChangeSearch}
                    //onSubmited = {() => console.log(1)}
                    onChangeSearch = {this.onChangeSearch}
                    state = {this.state}
                    />
                <WeatherCart />
            </div>
        );
    }
};

