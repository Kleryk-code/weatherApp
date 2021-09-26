import React from 'react';
import { useState, useEffect } from 'react';
import './app.css';
import SearchForm from '../search-form';
import WeatherCart from '../weather-cart/weather-cart';
import FavoriteList from '../favoriteList/favoriteList'
import OpenweathermapApi from '../../openweathermapApi/openweathermapApi';


/* export default class App extends React.Component {
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
}; */




/* function componentWillMount() {
  //Не доконца понимаю как работает &&
  localStorage.getItem('favoriteList') && setState({
    favoriteList: JSON.parse(localStorage.getItem('favoriteList'))
  })
}

function componentDidUpdate(nextProps, nextState) {
  localStorage.setItem('favoriteList', JSON.stringify(nextState.favoriteList))
} */


const App = () => {

  const [searchRequest, setSearchRequest] = useState('');
  const [addButtonStatus, setAddButtonStatus] = useState('PASSIVE');
  const [currentCity, setCurrentCity] = useState({
      id: null,
      cityName: '',
      temp: null
    });

  const [favoriteList, setFavoriteList] = useState(() => {
    const setFavoriteListData = localStorage.getItem('favoriteList');
    return setFavoriteListData !==null 
      ? JSON.parse(setFavoriteListData)
      : [];
  });

  useEffect(() => {
    localStorage.setItem('favoriteList', JSON.stringify(favoriteList))
  }, [favoriteList]);



  const createFavItem = (cityData) => {
    return {
      id: cityData.id,
      cityName: cityData.cityName,
      temp: cityData.temp,
    }
  };

  const weatherApi = new OpenweathermapApi();
    
/*   const onSubmit = (event) => {
    event.preventDefault();
    weatherApi.getCityData(searchRequest)
      .then(data => setCurrentCity({   
        ...currentCity,
          id: data.id,
          cityName: data.name,
          temp: data.temp
        })
      )
      .then(setAddButtonStatus('ACTIVE'))
  } */


  const onSubmit = async (event) => {
    event.preventDefault();
    const data = await weatherApi.getCityData(searchRequest);
    setCurrentCity({   
        ...currentCity,
          id: data.id,
          cityName: data.name,
          temp: data.temp
        })
    setAddButtonStatus('ACTIVE')
  }

  const onChangeSearch = (event) => {
    setSearchRequest(event.target.value)
  }

  const changeActivCity =async (cityName) => {
    const data = await weatherApi.getCityData(cityName);
    setCurrentCity({   
      ...currentCity,
        id: data.id,
        cityName: data.name,
        temp: data.temp
      })
    setAddButtonStatus('DELETE')
  }



  const isDublicate = (elementList, checkedItem) => {
    return elementList.find(item => item.id === checkedItem.id)
  }

  
  const addItem = (cityData, favData) => {
    cityData = currentCity;
    favData = favoriteList;
    
    if (cityData.id === null || isDublicate(favData, cityData)) {
      setAddButtonStatus('PASSIVE');
      return
    } else {
      const newItem = createFavItem(cityData)
      setFavoriteList(() => {
          const newArr = [...favData, newItem]
          return newArr; 
      })
      setAddButtonStatus('PASSIVE');
    }
  } 

/*   const deleteItem = () => {
    setFavoriteList((favoriteList) => {
        const idx = favoriteList.findIndex((el) => el.id === currentCity.id);
        const newArray = [
            ...favoriteList.slice(0, idx),
            ...favoriteList.slice(idx + 1)
            ]
        return newArray
    })
  } */


  const deleteItem = () => {
    setFavoriteList((favoriteList) => {
      return favoriteList.filter(favoriteItem => favoriteItem.id !== currentCity.id)
    });
    setAddButtonStatus('PASSIVE');
  }



  return (
    <div>
        <h2>Weather</h2>
        <SearchForm 
            onSubmit = {onSubmit}
            onChangeSearch = {onChangeSearch}
            searchRequest = {searchRequest}
        />
        <WeatherCart 
            //state = {this.state}
            currentCity = {currentCity}
            addButtonStatus = {addButtonStatus}
            favoriteList = {favoriteList}
            addItem = {addItem}
            //addFavItem = {addFavItem}
            deleteItem ={deleteItem} 
        />
         <FavoriteList 
            favoriteList = {favoriteList}
            changeActivCity = {changeActivCity}
        />
    </div>
  )
}

export default App;