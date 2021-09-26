import React from 'react';
import {AddButton, DeleteButton, InactiveButton} from './addFavoriteButton/addFavoriteButton'

  
  const WeatherCart = (props) => {
    const {cityName, temp} = props.currentCity; 
    const {addButtonStatus, currentCity, addItem, deleteItem} = props;
    let button;

    switch(addButtonStatus) {
      case 'ACTIVE':
        button = <AddButton addItem = {addItem}
        currentCity = {currentCity} />;
        break;
      case 'DELETE':
        button = <DeleteButton deleteItem = {deleteItem} />
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
    )
  }

  export default WeatherCart;