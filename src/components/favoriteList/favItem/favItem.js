import React from 'react';


function FavItem(props) {
  
  const {cityName, temp} = props;
  
  return (
    <li 
        //Не понятно как  пробрасывается ID вверх по клику на элемент  
        onClick = {() => {props.changeActivCity(cityName)}} >
      {cityName} {temp}
    </li>
  )
}

  export default FavItem;