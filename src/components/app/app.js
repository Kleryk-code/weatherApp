import React from 'react';
import './app.css';
import SearchForm from '../search-form';
import WeatherCart from '../weather-cart/weather-cart';
import OpenweathermapApi from '../../openweathermapApi/openweathermapApi';


export default class App extends React.Component {

    weatherApi = new OpenweathermapApi();
    

    render() {
        return (
            <div>
                <h2>Hello</h2>
                <SearchForm />
                <WeatherCart />
            </div>
        );
    }
};

