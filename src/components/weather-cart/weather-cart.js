import React from 'react';
import {AddButton, DeleteButton, InactiveButton} from './addFavoriteButton/addFavoriteButton'
class WeatherCart extends React.Component {
    
    render() {

      const {cityName, temp} = this.props.state.currentCity; 
      const {addButtonStatus, currentCity} = this.props.state;
      const favoriteList = this.props.state.favoriteList;

      let button;
      switch(addButtonStatus) {
        case 'ACTIVE':
          button = <AddButton addItem = {this.props.addItem}
          currentCity = {currentCity}/>;
          break;
        case 'DELETE':
          button = <DeleteButton deleteItem = {this.props.deleteItem}
          favoriteList = {favoriteList} />
          break;
        default:
          button = <InactiveButton /> 
      }

      return (
        <div>
          <div>
            <p>City: {cityName} {temp}</p>
          </div>

          <div>
            {button}
          </div>
        </div>
      );
    }
  }

  export default WeatherCart;