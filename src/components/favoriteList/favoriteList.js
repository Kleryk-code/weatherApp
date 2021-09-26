import React from 'react';
import FavItem from './favItem';

const FavoriteList = (props) => {
  console.log('list');
  const favoriteList = props.favoriteList;
  let favItem = favoriteList
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