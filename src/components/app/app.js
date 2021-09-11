import React from 'react';
import './app.css';
import SearchForm from '../search-form';
import WeatherCart from '../weather-cart/weather-cart';
import FavoriteList from '../favoriteList/favoriteList'
import OpenweathermapApi from '../../openweathermapApi/openweathermapApi';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          addButtonStatus: 'PASSIVE',

          searchRequest: '',

          currentCity: {
            id: null,
            cityName: '',
            temp: null,
          },
          favoriteList: []
        };

        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.addItem = this.addItem.bind(this);
        this.changeActivCity = this.changeActivCity.bind(this);

    }
    weatherApi = new OpenweathermapApi();
    
    onSubmit(event) {
      this.weatherApi.getCityData(this.state.searchRequest)
        .then(data => this.setState({   
          currentCity: {
            id: data.id,
            cityName: data.name,
            temp: data.temp
          },
          addButtonStatus: 'ACTIVE'
        }))
          
      event.preventDefault();
    }

    onChangeSearch(event) {
        this.setState({searchRequest: event.target.value})
    }

    changeActivCity(cityName) {
      this.weatherApi.getCityData(cityName)
      .then(data => this.setState({   
        currentCity: {
          id: data.id,
          cityName: data.name,
          temp: data.temp
        },
        addButtonStatus: 'DELETE'
      }))
    }
    
    createFavItem (cityData) {
      return {
        id: cityData.id,
        cityName: cityData.cityName,
        temp: cityData.temp,
      }
    }

    isDublicate (firstArr, secondArr) {
      let dublicate;
      if (firstArr) {
        dublicate = firstArr.some(item => item.id === secondArr.id)
        return dublicate;
      }
    }

    addItem = (cityData, favData) => {
      cityData = this.state.currentCity;
      favData = this.state.favoriteList;
      
      if (cityData.id === null || this.isDublicate(favData, cityData)) {
        return
      } else {
        const newItem = this.createFavItem(cityData)
        this.setState(({favoriteList}) => {
            const newArr = [
                ...favoriteList,
                newItem
            ]
            return { favoriteList: newArr }
        })
        this.setState({addButtonStatus: 'PASSIVE'})
      }
  }

  deleteItem = () => {
    
    this.setState(({favoriteList}) => {
        const idx = favoriteList.findIndex((el) => el.id === this.state.currentCity.id)
        console.log(idx);
        const newArray = [
            ...favoriteList.slice(0, idx),
            ...favoriteList.slice(idx + 1)
            ]
        return {
            favoriteList: newArray
        }
    })
}

/* deleteItem = (id) => {
    
  this.setState(({favoriteList}) => {
      const idx = favoriteList.findIndex((el) => el.id === id)
      console.log(idx);
      const newArray = [
          ...favoriteList.slice(0, idx),
          ...favoriteList.slice(idx + 1)
          ]
      return {
          favoriteList: newArray
      }
  })

} */

  addFavItem = () => {
    debugger
    if (this.state.addButtonStatus === 'ACTIVE') {
      this.addItem(this.cityName)
    } else if (this.state.addButtonStatus === 'DELETE') {
      this.deleteItem(this.id)
    }
  }

  componentWillMount() {
    //Не доконца понимаю как работает &&
    localStorage.getItem('favoriteList') && this.setState({
      favoriteList: JSON.parse(localStorage.getItem('favoriteList'))
    })
  }

  componentDidUpdate(nextProps, nextState) {
    localStorage.setItem('favoriteList', JSON.stringify(nextState.favoriteList))
  }

    render() {

        return (
            <div>
                <h2>Weather</h2>
                <SearchForm 
                    onSubmit = {this.onSubmit}
                    onChangeSearch = {this.onChangeSearch}
                    state = {this.state}
                    />
                <WeatherCart 
                    state = {this.state}
                    addItem = {this.addItem}
                    addFavItem = {this.addFavItem}
                    deleteItem ={this.deleteItem} />
                <FavoriteList favoriteList = {this.state.favoriteList}
                    changeActivCity = {this.changeActivCity}
                />
            </div>
        );
    }
};

