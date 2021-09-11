import React from 'react';

function AddButton(props) {
  return (
    <button  
      style={{backgroundColor: 'green'}}
      onClick = {props.addItem}>
        Add City
    </button>
  );
}

function DeleteButton(props) {
  return (
    <button 
      style={{backgroundColor: 'red'}}
      onClick={props.deleteItem}>
        Delete City
    </button>
  );
}

function InactiveButton() {
  return (
    <button style={{backgroundColor: 'gray'}} >
      Turn City
    </button>
  );
}


export {AddButton, DeleteButton, InactiveButton};