import React from 'react';
import FavItem from './favItem';

function FavoriteList(props) {
  
/*    let favItem = props.favoriteList;
    
     if (favItem.length > 0) {
      favItem.map(f => <FavItem 
        key = {f.id}
        id = {f.id} 
        cityName = {f.cityName} 
        temp = {f.temp} 
        changeActivCity = {props.changeActivCity}/>)
    } else return null */
    let favItem = props.favoriteList
      .map(f => <FavItem 
        key = {f.id}
        id = {f.id} 
        cityName = {f.cityName} 
        temp = {f.temp} 
        changeActivCity = {props.changeActivCity}/>)

      return (
        <div>
            <ul>
                {favItem}
            </ul>
        </div>
      );
    }

  export default FavoriteList;