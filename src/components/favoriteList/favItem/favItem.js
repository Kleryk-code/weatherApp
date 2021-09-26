import React from 'react';



const FavItem = (props) => {
  const {cityName, temp} = props;
  
  return (
    <li   
        onClick = {() => {props.changeActivCity(cityName)}} >
      {cityName} {temp}
    </li>
  )
}

  export default FavItem;