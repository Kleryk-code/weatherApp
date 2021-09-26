import React from 'react';

const AddButton = (props) => {
  const {addItem} = props;
  return (
    <button  
      style={{backgroundColor: 'green'}}
      onClick = {addItem}>
        Add City
    </button>
  );
}

const DeleteButton = (props) => {
  const {deleteItem} = props;
  return (
    <button 
      style={{backgroundColor: 'red'}}
      onClick={deleteItem}>
        Delete City
    </button>
  );
}

const InactiveButton = () => {
  return (
    <button style={{backgroundColor: 'gray'}} >
      Turn City
    </button>
  );
}


export {AddButton, DeleteButton, InactiveButton};